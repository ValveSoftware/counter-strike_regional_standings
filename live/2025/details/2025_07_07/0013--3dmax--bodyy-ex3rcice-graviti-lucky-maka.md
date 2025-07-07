### Roster Details<br />
Team Name: 3DMAX<br />
Roster: bodyy, Ex3rcice, Graviti, Lucky, Maka<br />
Global Rank: [13](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [11]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  1519.1<br />
<br />
Final Rank Value (1519.1) = Starting Rank Value (1539.2) + Head To Head Adjustments (-20.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.634[<sup>1</sup>](#table2)
- Bounty Collected: 0.645[<sup>2</sup>](#table1)
- Opponent Network: 0.308[<sup>2</sup>](#table1)
- LAN Wins: 0.855[<sup>2</sup>](#table1)

The average of these factors is 0.611<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1539.2
- 400 + ( ( 0.611 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 1539.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      203 | 2025-06-14 | paiN          | L   | 1.000      | -            | -                | -                | -         |   -19.41 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           39 |      245 | 2025-06-13 | Vitality      | L   | 1.000      | -            | -                | -                | -         |    -1.63 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           38 |      262 | 2025-06-12 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |   -13.23 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           37 |      273 | 2025-06-12 | G2            | W   | 1.000      | 1.000        | 0.505 (0.505)    | 0.423 (0.423)    | 1 (1.000) |    16.73 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           36 |      317 | 2025-06-09 | FaZe          | W   | 1.000      | 0.143        | 0.511 (0.073)    | -                | 1 (1.000) |    19.41 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           35 |      337 | 2025-06-08 | Nemiga        | W   | 1.000      | 0.143        | -                | 0.756 (0.108)    | 1 (1.000) |     4.56 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           34 |      349 | 2025-06-07 | Legacy        | L   | 1.000      | -            | -                | -                | -         |   -25.15 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           33 |      357 | 2025-06-07 | BetBoom       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.48 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           32 |      558 | 2025-05-21 | G2            | L   | 0.888      | -            | -                | -                | -         |   -12.28 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           31 |      590 | 2025-05-20 | Legacy        | W   | 0.880      | 1.000        | 0.124 (0.109)    | 0.954 (0.840)    | 1 (0.880) |     4.66 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           30 |      617 | 2025-05-19 | GamerLegion   | L   | 0.874      | -            | -                | -                | -         |   -15.60 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           29 |     1260 | 2025-04-22 | FaZe          | L   | 0.696      | -            | -                | -                | -         |    -7.20 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           28 |     1273 | 2025-04-21 | BIG           | W   | 0.690      | 1.000        | 0.175 (0.121)    | 0.400 (0.276)    | 1 (0.690) |     2.13 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           27 |     1287 | 2025-04-20 | GamerLegion   | L   | 0.683      | -            | -                | -                | -         |   -12.49 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           26 |     1494 | 2025-04-11 | FaZe          | L   | 0.618      | -            | -                | -                | -         |    -6.80 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           25 |     1576 | 2025-04-08 | Aurora        | W   | 0.600      | 1.000        | 0.692 (0.415)    | 0.586 (0.351)    | 1 (0.600) |    13.98 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           24 |     1619 | 2025-04-07 | Astralis      | W   | 0.592      | 1.000        | 0.472 (0.280)    | 0.424 (0.251)    | 1 (0.592) |     8.30 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           23 |     1640 | 2025-04-06 | The MongolZ   | W   | 0.584      | 1.000        | 1.000 (0.584)    | 0.471 (0.275)    | 1 (0.584) |    15.18 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           22 |     2498 | 2025-03-11 | Liquid        | L   | 0.412      | -            | -                | -                | -         |    -9.83 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           21 |     2541 | 2025-03-10 | The MongolZ   | L   | 0.406      | -            | -                | -                | -         |    -2.04 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           20 |     2598 | 2025-03-09 | Falcons       | W   | 0.398      | 1.000        | 1.000 (0.398)    | 0.546 (0.217)    | 1 (0.398) |     9.93 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           19 |     2650 | 2025-03-08 | Vitality      | L   | 0.393      | -            | -                | -                | -         |    -0.89 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           18 |     2734 | 2025-03-07 | Aurora        | W   | 0.386      | 1.000        | 0.692 (0.267)    | 0.586 (0.226)    | -         |     9.45 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           17 |     2840 | 2025-03-04 | M80           | W   | 0.367      | -            | -                | -                | -         |     0.40 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           16 |     2871 | 2025-03-03 | HEROIC        | W   | 0.358      | -            | -                | -                | -         |     6.25 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           15 |     2891 | 2025-03-02 | Mindfreak     | W   | 0.351      | -            | -                | -                | -         |     0.09 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           14 |     2919 | 2025-03-01 | TYLOO         | L   | 0.345      | -            | -                | -                | -         |    -7.26 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           13 |     3249 | 2025-02-18 | SAW           | L   | 0.272      | -            | -                | -                | -         |    -8.22 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           12 |     3268 | 2025-02-17 | Aurora        | L   | 0.266      | -            | -                | -                | -         |    -1.82 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           11 |     3294 | 2025-02-16 | MIBR          | W   | 0.258      | -            | -                | -                | -         |     1.66 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           10 |     3330 | 2025-02-15 | MOUZ          | L   | 0.251      | -            | -                | -                | -         |    -0.91 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|            9 |     3357 | 2025-02-14 | Virtus.pro    | W   | 0.245      | 1.000        | 0.237 (0.058)    | 0.467 (0.114)    | -         |     4.11 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|            8 |     3438 | 2025-02-10 | HEROIC        | W   | 0.221      | -            | -                | -                | -         |     3.88 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|            7 |     3451 | 2025-02-10 | ex-SABRE      | W   | 0.220      | -            | -                | -                | -         |     0.08 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|            6 |     3672 | 2025-02-03 | Aurora        | L   | 0.174      | -            | -                | -                | -         |    -1.14 | Djoko, Ex3rcice, Graviti, Lucky, Maka |
|            5 |     3683 | 2025-02-02 | BIG           | W   | 0.167      | -            | -                | -                | -         |     0.80 | Djoko, Ex3rcice, Graviti, Lucky, Maka |
|            4 |     3704 | 2025-02-01 | Vitality      | L   | 0.159      | -            | -                | -                | -         |    -0.36 | Djoko, Ex3rcice, Graviti, Lucky, Maka |
|            3 |     3716 | 2025-01-30 | MIBR          | W   | 0.146      | -            | -                | -                | -         |     1.01 | Djoko, Ex3rcice, Graviti, Lucky, Maka |
|            2 |     3731 | 2025-01-29 | FlyQuest      | W   | 0.138      | -            | -                | -                | -         |     0.53 | Djoko, Ex3rcice, Graviti, Lucky, Maka |
|            1 |     3969 | 2025-01-14 | HEROIC        | L   | 0.040      | -            | -                | -                | -         |    -0.53 | Djoko, Ex3rcice, Graviti, Lucky, Maka |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($132,293.09)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.26) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-22 |      1.000 | $20,000.00     | $20,000.00      |
| 2025-05-25 |      0.915 | $25,000.00     | $22,864.27      |
| 2025-04-27 |      0.725 | $25,000.00     | $18,129.56      |
| 2025-04-13 |      0.633 | $62,500.00     | $39,572.74      |
| 2025-03-16 |      0.447 | $38,500.00     | $17,200.81      |
| 2025-02-23 |      0.308 | $31,250.00     | $9,614.62       |
| 2025-02-09 |      0.214 | $23,000.00     | $4,911.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
