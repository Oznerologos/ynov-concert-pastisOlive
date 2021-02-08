<?php

namespace App\Controller;

use App\Entity\Concert;
use App\Form\ConcertType;
use App\Repository\ConcertRepository;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/concert")
 */
class ConcertController extends AbstractController
{
    /**
     * @Route("/", name="concert_index", methods={"GET"})
     */
    public function index(ConcertRepository $concertRepository): Response
    {
        $response = new Response();

        $encoders = array(new XmlEncoder(), new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());
        $serializer = new Serializer($normalizers, $encoders);
        $serializer = $this->container->get('serializer');
        $json = $serializer->serialize($concertRepository->findAll(), 'json', ['groups' => ['concert', 'concertRoom']]);
    
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent($json);

        return $response;
    }

    /**
     * @Route("/city", name="concert_city", methods={"POST"})
     */
    public function concertVille(ConcertRepository $concertRepository, Request $request): Response
    {
        $response = new Response();

        $encoders = array(new XmlEncoder(), new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());
        $serializer = new Serializer($normalizers, $encoders);
        $serializer = $this->container->get('serializer');
        $city = json_decode($request->getContent());
        $json = $serializer->serialize($concertRepository->findByCity($city->name), 'json', ['groups' => ['concert', 'concertRoom']]);
    
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent($json);

        return $response;
    }

    /**
     * @Route("/artist", name="concert_artist", methods={"GET"})
     */
    public function concertArtist(ConcertRepository $concertRepository, Request $request): Response
    {
        $response = new Response();

        $encoders = array(new XmlEncoder(), new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());
        $serializer = new Serializer($normalizers, $encoders);
        $serializer = $this->container->get('serializer');
        $artist = $request->query->get('artist');
        $json = $serializer->serialize($concertRepository->findBy(["artist" => $artist]), 'json', ['groups' => ['concert', 'concertRoom']]);
    
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent($json);

        return $response;
    }

    /**
     * @Route("/new", name="concert_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $encoders = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
  
        $serializer = new Serializer($normalizers, $encoders);

        $concert = new Concert();
        $form = $this->createForm(ConcertType::class, $concert);

        $concertDeserialized = $serializer->deserialize($request->getContent(), Concert::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $concert]);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($concert);
        $entityManager->flush();

        return $this->redirectToRoute('concert_index');
    }

    /**
     * @Route("/{id}", name="concert_show", methods={"GET"})
     */
    public function show(ConcertRepository $concertRepository, $id): Response
    {
        $response = new Response();

        $encoders = array(new XmlEncoder(), new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());
        $serializer = new Serializer($normalizers, $encoders);
        $serializer = $this->container->get('serializer');
        $json = $serializer->serialize($concertRepository->find($id), 'json', ['groups' => ['concert', 'concertRoom']]);
    
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent($json);

        return $response;
    }

    /**
     * @Route("/{id}/edit", name="concert_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Concert $concert): Response
    {
        $form = $this->createForm(ConcertType::class, $concert);
        $data=json_decode($request->getContent(),true);
        $form->submit($data);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('concert_index');
        }

        return $this->render('concert/edit.html.twig', [
            'concert' => $concert,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/{id}", name="concert_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Concert $concert): Response
    {
        if ($this->isCsrfTokenValid('delete'.$concert->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($concert);
            $entityManager->flush();
        }

        return $this->redirectToRoute('concert_index');
    }
}
