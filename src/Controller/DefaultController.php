<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="default")
     */
    public function index()
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/btp", name="btp")
     */
    public function btp()
    {
        return $this->render('default/btp.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/finances", name="finances")
     */
    public function finances()
    {
        return $this->render('default/finances.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/projects", name="projects")
     */
    public function projects()
    {
        return $this->render('default/projects.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/strategy", name="strategy")
     */
    public function strategy()
    {
        return $this->render('default/strategy.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contact()
    {
        return $this->render('default/contact.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/about-us", name="about_us")
     */
    public function aboutUs()
    {
        return $this->render('default/about_us.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/legacy", name="legacy")
     */
    public function legacy()
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
}
