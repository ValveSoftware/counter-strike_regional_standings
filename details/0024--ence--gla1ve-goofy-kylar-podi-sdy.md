### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Goofy, Kylar, podi, sdy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [24](../standings_global.md)<br />
Regional Rank: [16]( ../standings_europe.md)<br />
Final Rank Value:  1398.2<br />
<br />
Final Rank Value (1398.2) = Starting Rank Value (1487.9) + Head To Head Adjustments (-89.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.600[<sup>1</sup>](#table2)
- Bounty Collected: 0.512[<sup>2</sup>](#table1)
- Opponent Network: 0.284[<sup>2</sup>](#table1)
- LAN Wins: 0.668[<sup>2</sup>](#table1)

The average of these factors is 0.516<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1487.9
- 400 + ( ( 0.516 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1487.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |      163 | 2024-06-16 | Falcons            | L   | 1.000      | -            | -                | -                | -         |    -8.55 | gla1ve, Goofy, Kylar, podi, sdy    |
|           43 |      232 | 2024-06-14 | Complexity         | W   | 1.000      | 0.500        | 0.440 (0.220)    | 0.427 (0.214)    | 1 (1.000) |    27.15 | gla1ve, Goofy, Kylar, podi, sdy    |
|           42 |      239 | 2024-06-14 | MIBR               | W   | 1.000      | 0.500        | 0.270 (0.135)    | 0.648 (0.324)    | 1 (1.000) |    22.62 | gla1ve, Goofy, Kylar, podi, sdy    |
|           41 |      574 | 2024-06-06 | HEROIC             | L   | 0.966      | -            | -                | -                | -         |    -3.87 | gla1ve, Goofy, Kylar, podi, sdy    |
|           40 |      587 | 2024-06-06 | Astralis           | L   | 0.965      | -            | -                | -                | -         |    -1.84 | gla1ve, Goofy, Kylar, podi, sdy    |
|           39 |      624 | 2024-06-05 | Sashi              | W   | 0.960      | 0.715        | 0.202 (0.139)    | 1.000 (0.687)    | 1 (0.960) |    11.59 | gla1ve, Goofy, Kylar, podi, sdy    |
|           38 |      634 | 2024-06-05 | The MongolZ        | L   | 0.959      | -            | -                | -                | -         |    -1.31 | gla1ve, Goofy, Kylar, podi, sdy    |
|           37 |      644 | 2024-06-05 | Ninjas in Pyjamas  | L   | 0.959      | -            | -                | -                | -         |    -5.29 | gla1ve, Goofy, Kylar, podi, sdy    |
|           36 |      749 | 2024-06-01 | DMS                | L   | 0.934      | -            | -                | -                | -         |   -26.31 | gla1ve, Goofy, Kylar, podi, sdy    |
|           35 |      755 | 2024-06-01 | KOI                | W   | 0.933      | -            | -                | -                | -         |     5.75 | gla1ve, Goofy, Kylar, podi, sdy    |
|           34 |      764 | 2024-06-01 | DMS                | L   | 0.932      | -            | -                | -                | -         |   -26.82 | gla1ve, Goofy, Kylar, podi, sdy    |
|           33 |     1044 | 2024-05-21 | Liquid             | L   | 0.858      | -            | -                | -                | -         |    -6.43 | dycha, gla1ve, Goofy, hades, Kylar |
|           32 |     1127 | 2024-05-18 | fnatic             | W   | 0.840      | 0.769        | 0.298 (0.192)    | 0.623 (0.402)    | -         |    15.91 | dycha, gla1ve, Goofy, hades, Kylar |
|           31 |     1151 | 2024-05-17 | Gaimin Gladiators  | W   | 0.834      | 0.769        | 0.069 (0.044)    | 0.528 (0.339)    | -         |     4.96 | dycha, gla1ve, Goofy, hades, Kylar |
|           30 |     1164 | 2024-05-17 | fnatic             | L   | 0.832      | -            | -                | -                | -         |    -9.50 | dycha, gla1ve, Goofy, hades, Kylar |
|           29 |     1520 | 2024-05-04 | FURIA              | L   | 0.746      | -            | -                | -                | -         |    -6.56 | dycha, gla1ve, Goofy, hades, Kylar |
|           28 |     1536 | 2024-05-03 | GamerLegion        | L   | 0.739      | -            | -                | -                | -         |   -16.42 | dycha, gla1ve, Goofy, hades, Kylar |
|           27 |     1555 | 2024-05-02 | Monte              | W   | 0.734      | 0.889        | 0.188 (0.122)    | 0.668 (0.436)    | 1 (0.734) |     6.18 | dycha, gla1ve, Goofy, hades, Kylar |
|           26 |     1582 | 2024-05-01 | Bad News Kangaroos | W   | 0.726      | 0.889        | -                | 0.196 (0.126)    | 1 (0.726) |     1.00 | dycha, gla1ve, Goofy, hades, Kylar |
|           25 |     1613 | 2024-04-30 | GamerLegion        | L   | 0.719      | -            | -                | -                | -         |   -16.77 | dycha, gla1ve, Goofy, hades, Kylar |
|           24 |     1878 | 2024-04-19 | AMKAL              | L   | 0.646      | -            | -                | -                | -         |   -17.11 | dycha, gla1ve, Goofy, hades, Kylar |
|           23 |     1961 | 2024-04-17 | Enterprise         | W   | 0.632      | 0.384        | -                | 0.654 (0.159)    | -         |     1.46 | dycha, gla1ve, Goofy, hades, Kylar |
|           22 |     2130 | 2024-04-10 | OG                 | L   | 0.586      | -            | -                | -                | -         |   -15.53 | dycha, gla1ve, Goofy, hades, Kylar |
|           21 |     2213 | 2024-04-08 | FORZE              | L   | 0.573      | -            | -                | -                | -         |   -16.69 | dycha, gla1ve, Goofy, hades, Kylar |
|           20 |     2324 | 2024-04-04 | Aurora Young Blud  | W   | 0.545      | 0.384        | -                | 0.359 (0.075)    | -         |     0.29 | dycha, gla1ve, Goofy, hades, Kylar |
|           19 |     2619 | 2024-03-19 | FURIA              | L   | 0.440      | -            | -                | -                | -         |    -4.03 | dycha, gla1ve, Goofy, hades, Kylar |
|           18 |     2635 | 2024-03-18 | paiN               | L   | 0.432      | -            | -                | -                | -         |    -5.19 | dycha, gla1ve, Goofy, hades, Kylar |
|           17 |     2644 | 2024-03-17 | KOI                | W   | 0.428      | -            | -                | -                | 1 (0.428) |     2.07 | dycha, gla1ve, Goofy, hades, Kylar |
|           16 |     2661 | 2024-03-17 | Imperial           | L   | 0.426      | -            | -                | -                | -         |    -6.71 | dycha, gla1ve, Goofy, hades, Kylar |
|           15 |     2791 | 2024-03-12 | B8                 | L   | 0.393      | -            | -                | -                | -         |   -10.72 | dycha, gla1ve, Goofy, hades, Kylar |
|           14 |     2804 | 2024-03-11 | HEROIC             | L   | 0.388      | -            | -                | -                | -         |    -2.35 | dycha, gla1ve, Goofy, hades, Kylar |
|           13 |     2817 | 2024-03-11 | Metizport          | W   | 0.386      | -            | -                | -                | -         |     0.64 | dycha, gla1ve, Goofy, hades, Kylar |
|           12 |     3217 | 2024-02-22 | Astralis           | W   | 0.265      | 0.143        | 0.546 (0.021)    | -                | 1 (0.265) |     7.58 | dycha, gla1ve, Goofy, hades, Kylar |
|           11 |     3239 | 2024-02-21 | Vitality           | L   | 0.259      | -            | -                | -                | -         |    -0.56 | dycha, gla1ve, Goofy, hades, Kylar |
|           10 |     3271 | 2024-02-20 | GamerLegion        | W   | 0.252      | -            | -                | -                | 1 (0.252) |     0.40 | dycha, gla1ve, Goofy, hades, Kylar |
|            9 |     3292 | 2024-02-19 | ex-Guild Eagles    | W   | 0.246      | -            | -                | -                | 1 (0.246) |     0.26 | dycha, gla1ve, Goofy, hades, Kylar |
|            8 |     3300 | 2024-02-19 | Spirit             | L   | 0.245      | -            | -                | -                | -         |    -0.43 | dycha, gla1ve, Goofy, hades, Kylar |
|            7 |     3504 | 2024-02-09 | Falcons            | L   | 0.181      | -            | -                | -                | -         |    -2.11 | dycha, gla1ve, Goofy, hades, Kylar |
|            6 |     3538 | 2024-02-06 | MOUZ               | L   | 0.160      | -            | -                | -                | -         |    -0.38 | dycha, gla1ve, Goofy, hades, Kylar |
|            5 |     3549 | 2024-02-05 | G2                 | W   | 0.153      | 1.000        | 0.745 (0.114)    | 0.481 (0.074)    | 1 (0.153) |     4.42 | dycha, gla1ve, Goofy, hades, Kylar |
|            4 |     3585 | 2024-02-03 | Vitality           | W   | 0.141      | 1.000        | 0.733 (0.103)    | -                | -         |     4.17 | dycha, gla1ve, Goofy, hades, Kylar |
|            3 |     3624 | 2024-02-02 | The MongolZ        | W   | 0.133      | 0.143        | 1.000 (0.019)    | -                | -         |     3.95 | dycha, gla1ve, Goofy, hades, Kylar |
|            2 |     3653 | 2024-02-01 | Astralis           | W   | 0.128      | -            | -                | -                | -         |     3.69 | dycha, gla1ve, Goofy, hades, Kylar |
|            1 |     3679 | 2024-01-31 | BIG                | L   | 0.120      | -            | -                | -                | -         |    -2.29 | dycha, gla1ve, Goofy, hades, Kylar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($55,819.97)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.22) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-09 |      0.987 | $8,000.00      | $7,892.66       |
| 2024-05-23 |      0.873 | $12,500.00     | $10,917.09      |
| 2024-05-12 |      0.800 | $7,000.00      | $5,598.99       |
| 2024-04-14 |      0.613 | $15,000.00     | $9,199.97       |
| 2024-03-20 |      0.447 | $10,000.00     | $4,469.44       |
| 2024-02-11 |      0.194 | $40,000.00     | $7,741.83       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
