### Roster Details<br />
Team Name: 3DMAX<br />
Roster: bodyy, Ex3rcice, Graviti, Lucky, Maka<br />
Global Rank: [14](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [11]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  1609.9<br />
<br />
Final Rank Value (1609.9) = Starting Rank Value (1715.6) + Head To Head Adjustments (-105.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.780[<sup>1</sup>](#table2)
- Bounty Collected: 0.648[<sup>2</sup>](#table1)
- Opponent Network: 0.389[<sup>2</sup>](#table1)
- LAN Wins: 0.836[<sup>2</sup>](#table1)

The average of these factors is 0.663<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1715.6
- 400 + ( ( 0.663 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1715.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |      340 | 2025-12-06 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -9.56 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           50 |      367 | 2025-12-05 | PARIVISION        | W   | 0.995      | 1.000        | 0.161 (0.160)    | 0.632 (0.628)    | 1 (0.995) |    14.16 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           49 |      399 | 2025-12-04 | Vitality          | L   | 0.987      | -            | -                | -                | -         |    -4.21 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           48 |      406 | 2025-12-04 | paiN              | L   | 0.986      | -            | -                | -                | -         |   -17.33 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           47 |      431 | 2025-12-02 | Ninjas in Pyjamas | W   | 0.974      | 0.809        | 0.213 (0.168)    | 0.530 (0.417)    | 1 (0.974) |    11.14 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           46 |      447 | 2025-12-01 | B8                | L   | 0.968      | -            | -                | -                | -         |   -11.88 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           45 |      477 | 2025-11-30 | Passion UA        | W   | 0.959      | 0.809        | -                | 0.507 (0.393)    | 1 (0.959) |    10.54 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           44 |      508 | 2025-11-29 | FlyQuest          | W   | 0.954      | -            | -                | -                | 1 (0.954) |     6.53 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           43 |      530 | 2025-11-29 | fnatic            | L   | 0.952      | -            | -                | -                | -         |   -20.02 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           42 |     1294 | 2025-11-03 | Lynn Vision       | L   | 0.783      | -            | -                | -                | -         |   -22.35 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           41 |     1316 | 2025-11-03 | G2                | L   | 0.778      | -            | -                | -                | -         |   -12.17 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           40 |     1440 | 2025-10-29 | Astralis          | L   | 0.745      | -            | -                | -                | -         |   -14.83 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           39 |     1464 | 2025-10-28 | FlyQuest          | L   | 0.739      | -            | -                | -                | -         |   -20.62 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           38 |     1493 | 2025-10-27 | B8                | L   | 0.734      | -            | -                | -                | -         |   -12.35 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           37 |     1557 | 2025-10-26 | SAW               | W   | 0.726      | 1.000        | 0.315 (0.229)    | 0.657 (0.477)    | 1 (0.726) |     7.25 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           36 |     1794 | 2025-10-19 | Legacy            | L   | 0.679      | -            | -                | -                | -         |   -10.35 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           35 |     1819 | 2025-10-18 | Liquid            | W   | 0.671      | 1.000        | 0.552 (0.370)    | 0.406 (0.273)    | 1 (0.671) |     9.60 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           34 |     1849 | 2025-10-17 | fnatic            | W   | 0.664      | 1.000        | -                | 0.753 (0.500)    | 1 (0.664) |     5.30 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           33 |     1874 | 2025-10-16 | Virtus.pro        | W   | 0.659      | -            | -                | -                | 1 (0.659) |     1.16 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           32 |     1914 | 2025-10-15 | Lynn Vision       | W   | 0.652      | -            | -                | -                | 1 (0.652) |     1.41 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           31 |     1940 | 2025-10-14 | Legacy            | L   | 0.646      | -            | -                | -                | -         |    -9.97 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           30 |     1954 | 2025-10-13 | The Huns          | W   | 0.643      | 1.000        | -                | 0.459 (0.295)    | 1 (0.643) |     0.79 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           29 |     2046 | 2025-10-10 | Falcons           | L   | 0.619      | -            | -                | -                | -         |    -4.79 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           28 |     2134 | 2025-10-08 | G2                | W   | 0.606      | 1.000        | 0.442 (0.268)    | -                | -         |     8.41 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           27 |     2184 | 2025-10-07 | MOUZ              | L   | 0.600      | -            | -                | -                | -         |    -7.24 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           26 |     2253 | 2025-10-06 | Natus Vincere     | W   | 0.593      | 1.000        | 0.812 (0.481)    | 0.411 (0.243)    | -         |    13.32 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           25 |     2298 | 2025-10-05 | FaZe              | W   | 0.587      | 1.000        | 0.634 (0.372)    | 0.579 (0.340)    | -         |    13.07 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           24 |     2347 | 2025-10-04 | FURIA             | L   | 0.580      | -            | -                | -                | -         |    -3.55 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           23 |     2464 | 2025-10-01 | ENCE              | W   | 0.560      | 0.769        | -                | 0.741 (0.319)    | -         |     2.69 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           22 |     2493 | 2025-09-30 | HEROIC            | W   | 0.554      | 0.769        | 0.362 (0.154)    | -                | -         |     5.34 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           21 |     2555 | 2025-09-29 | Rooster           | W   | 0.545      | -            | -                | -                | -         |     0.09 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           20 |     2589 | 2025-09-28 | Inner Circle      | L   | 0.539      | -            | -                | -                | -         |   -14.87 | bodyy, Ex3rcice, Graviti, Lucky, Nivera |
|           19 |     2992 | 2025-09-16 | Virtus.pro        | L   | 0.459      | -            | -                | -                | -         |   -13.78 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           18 |     3012 | 2025-09-15 | GamerLegion       | L   | 0.453      | -            | -                | -                | -         |   -10.33 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           17 |     3067 | 2025-09-14 | FaZe              | L   | 0.445      | -            | -                | -                | -         |    -4.01 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           16 |     3155 | 2025-09-12 | The MongolZ       | W   | 0.432      | 1.000        | 1.000 (0.432)    | -                | -         |     9.49 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           15 |     3496 | 2025-08-31 | TYLOO             | W   | 0.352      | -            | -                | -                | -         |     0.47 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           14 |     3553 | 2025-08-29 | TYLOO             | W   | 0.339      | -            | -                | -                | -         |     0.44 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           13 |     3577 | 2025-08-28 | Lynn Vision       | W   | 0.337      | -            | -                | -                | -         |     0.65 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           12 |     3721 | 2025-08-21 | The MongolZ       | L   | 0.287      | -            | -                | -                | -         |    -2.85 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           11 |     3753 | 2025-08-20 | Natus Vincere     | W   | 0.279      | 1.000        | 0.812 (0.227)    | -                | -         |     6.37 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|           10 |     4341 | 2025-07-28 | G2                | L   | 0.127      | -            | -                | -                | -         |    -2.58 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            9 |     4373 | 2025-07-27 | GamerLegion       | W   | 0.120      | -            | -                | -                | -         |     1.11 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            8 |     4406 | 2025-07-26 | The MongolZ       | L   | 0.113      | -            | -                | -                | -         |    -1.14 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            7 |     4416 | 2025-07-25 | TYLOO             | W   | 0.107      | -            | -                | -                | -         |     0.14 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            6 |     4437 | 2025-07-24 | Ninjas in Pyjamas | L   | 0.100      | -            | -                | -                | -         |    -2.22 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            5 |     4448 | 2025-07-23 | MIBR              | W   | 0.093      | -            | -                | -                | -         |     0.13 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            4 |     4540 | 2025-07-18 | TYLOO             | L   | 0.058      | -            | -                | -                | -         |    -1.76 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            3 |     4561 | 2025-07-17 | paiN              | W   | 0.052      | -            | -                | -                | -         |     0.45 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            2 |     4591 | 2025-07-16 | Rare Atom         | W   | 0.045      | -            | -                | -                | -         |     0.08 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |
|            1 |     4612 | 2025-07-15 | Lynn Vision       | L   | 0.038      | -            | -                | -                | -         |    -1.14 | bodyy, Ex3rcice, Graviti, Lucky, Maka   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($224,278.40)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.52) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-14 |      1.000 | $20,000.00     | $20,000.00      |
| 2025-11-09 |      0.819 | $4,000.00      | $3,274.20       |
| 2025-11-01 |      0.767 | $18,750.00     | $14,382.78      |
| 2025-10-19 |      0.679 | $170,000.00    | $115,355.70     |
| 2025-10-12 |      0.634 | $58,000.00     | $36,752.19      |
| 2025-09-21 |      0.494 | $15,000.00     | $7,416.73       |
| 2025-08-31 |      0.352 | $20,877.00     | $7,351.85       |
| 2025-08-24 |      0.306 | $40,000.00     | $12,228.89      |
| 2025-08-03 |      0.167 | $23,000.00     | $3,841.05       |
| 2025-07-20 |      0.074 | $50,000.00     | $3,675.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
