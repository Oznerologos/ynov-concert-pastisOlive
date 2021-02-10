<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/user")
 */
class UserController extends AbstractController
{
    /** @var UserPasswordEncoderInterface */
    private $encoder;
    
    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    /**
     * @Route("/", name="user_index", methods={"GET"})
     */
    public function index(UserRepository $userRepository): Response
    {
        return $this->render('user/index.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="user_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $encoders = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
  
        $serializer = new Serializer($normalizers, $encoders);

        $user = new User();
        $form = $this->createForm(UserType::class, $user);

        $user->setRoles([]);
        $userDeserialized = $serializer->deserialize($request->getContent(), User::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $user]);
        $entityManager = $this->getDoctrine()->getManager();
        $user->setPassword($this->encoder->encodePassword($user, $user->getPassword()));
        $entityManager->persist($user);
        $entityManager->flush();

        return $this->redirectToRoute('user_index');
    }

    /**
     * @Route("/{mail}", name="user_show", methods={"GET"})
     */
    public function show(UserRepository $userRepository, $mail): Response
    {
        $response = new Response();

        $encoders = array(new XmlEncoder(), new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());
        $serializer = new Serializer($normalizers, $encoders);
        $serializer = $this->container->get('serializer');
        $json = $serializer->serialize($userRepository->findBy(["mail" => $mail]), 'json', ['groups' => ['user']]);
    
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent($json);

        return $response;
    }

    /**
     * @Route("/show/{id}", name="user_show_id", methods={"GET"})
     */
    public function showId(UserRepository $userRepository, $id): Response
    {
        $response = new Response();

        $encoders = array(new XmlEncoder(), new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());
        $serializer = new Serializer($normalizers, $encoders);
        $serializer = $this->container->get('serializer');
        $json = $serializer->serialize($userRepository->find($id), 'json', ['groups' => ['user']]);
    
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent($json);

        return $response;
    }

    /**
     * @Route("/{id}/edit", name="user_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, User $user): Response
    {
        $encoders = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
  
        $serializer = new Serializer($normalizers, $encoders);

        $form = $this->createForm(UserType::class, $user);

        $user->setPassword($this->encoder->encodePassword($user, $user->getPassword()));

        if($user->getRoles() == ["ROLE_USER"]) {
           $user->setRoles([]);
        }
        
        $userDeserialized = $serializer->deserialize($request->getContent(), User::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $user]);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        return $this->redirectToRoute('user_index');
    }

    /**
     * @Route("/admin/{id}", name="user_delete", methods={"DELETE"})
     */
    public function delete(Request $request, User $user): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('user_index');
    }
}
