### Roster Details<br />
Team Name: HAVU<br />
Roster: Airax, Jelo, ottoNd, puuha, uli<br />
Global Rank: [163](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [106]( ../standings_europe.md)<br />
<br />
Final Rank Value:  673.6<br />
<br />
Final Rank Value (673.6) = Starting Rank Value (706.1) + Head To Head Adjustments (-32.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.235[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.012[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 706.1
- 400 + ( ( 0.149 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 706.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |        9 | 2024-08-06 | Metizport         | L   | 1.000      | -            | -                | -                | -         |    -6.27 | Airax, Jelo, ottoNd, puuha, uli  |
|           35 |       19 | 2024-08-06 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -0.94 | Airax, Jelo, ottoNd, puuha, uli  |
|           34 |       35 | 2024-08-05 | Space             | L   | 1.000      | -            | -                | -                | -         |    -9.08 | Airax, Jelo, ottoNd, puuha, uli  |
|           33 |      128 | 2024-08-02 | ENCE Academy      | L   | 1.000      | -            | -                | -                | -         |   -14.17 | Airax, Jelo, ottoNd, puuha, uli  |
|           32 |      302 | 2024-07-29 | Permitta          | L   | 1.000      | -            | -                | -                | -         |    -6.79 | Airax, Jelo, ottoNd, puuha, uli  |
|           31 |      422 | 2024-07-25 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -2.64 | Airax, Jelo, ottoNd, puuha, uli  |
|           30 |      749 | 2024-07-17 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |    -5.54 | Airax, Jelo, ottoNd, puuha, uli  |
|           29 |     1300 | 2024-06-09 | Zero Tenacity     | L   | 0.812      | -            | -                | -                | -         |    -2.97 | Airax, Jelo, ottoNd, puuha, uli  |
|           28 |     1401 | 2024-06-07 | GUN5              | L   | 0.800      | -            | -                | -                | -         |    -4.57 | Airax, Jelo, ottoNd, puuha, uli  |
|           27 |     1490 | 2024-06-06 | Sampi             | L   | 0.792      | -            | -                | -                | -         |    -6.01 | Airax, Jelo, ottoNd, puuha, uli  |
|           26 |     1610 | 2024-06-03 | RUBY              | W   | 0.773      | 0.435        | 0.095 (0.032)    | 0.479 (0.161)    | 0 (0.000) |    19.23 | Airax, Jelo, ottoNd, puuha, uli  |
|           25 |     1621 | 2024-06-02 | UHKA              | W   | 0.767      | 0.143        | 0.000 (0.000)    | 0.029 (0.003)    | 0 (0.000) |     3.78 | Airax, Jelo, ottoNd, puuha, uli  |
|           24 |     1635 | 2024-06-02 | Heimo             | W   | 0.765      | 0.143        | 0.006 (0.001)    | 0.103 (0.011)    | 0 (0.000) |    11.27 | Airax, Jelo, ottoNd, puuha, uli  |
|           23 |     2410 | 2024-05-05 | RUBY              | L   | 0.579      | -            | -                | -                | -         |    -4.02 | Airax, Jelo, ottoNd, puuha, uli  |
|           22 |     2423 | 2024-05-04 | RUSH B            | L   | 0.573      | -            | -                | -                | -         |    -5.12 | Airax, Jelo, ottoNd, puuha, uli  |
|           21 |     2464 | 2024-05-02 | Gaimin Gladiators | L   | 0.560      | -            | -                | -                | -         |    -2.97 | Airax, Jelo, ottoNd, puuha, uli  |
|           20 |     2473 | 2024-05-02 | Zero Tenacity     | L   | 0.558      | -            | -                | -                | -         |    -2.04 | Airax, Jelo, ottoNd, puuha, uli  |
|           19 |     2513 | 2024-04-30 | EYEBALLERS        | W   | 0.546      | 0.384        | 0.005 (0.001)    | 0.488 (0.102)    | 0 (0.000) |    12.86 | Airax, Jelo, ottoNd, puuha, uli  |
|           18 |     2532 | 2024-04-29 | Insilio           | W   | 0.539      | 0.435        | 0.023 (0.005)    | 0.539 (0.126)    | 0 (0.000) |    13.56 | Airax, Jelo, ottoNd, puuha, uli  |
|           17 |     2625 | 2024-04-25 | EYEBALLERS        | L   | 0.514      | -            | -                | -                | -         |    -3.99 | Airax, Jelo, ottoNd, puuha, uli  |
|           16 |     2637 | 2024-04-25 | kONO              | L   | 0.511      | -            | -                | -                | -         |    -5.56 | Airax, Jelo, ottoNd, puuha, uli  |
|           15 |     2665 | 2024-04-23 | 1WIN              | L   | 0.500      | -            | -                | -                | -         |    -3.07 | Airax, Jelo, ottoNd, puuha, uli  |
|           14 |     2685 | 2024-04-22 | SINNERS           | L   | 0.492      | -            | -                | -                | -         |    -1.16 | Airax, Jelo, ottoNd, puuha, uli  |
|           13 |     2781 | 2024-04-19 | B8                | L   | 0.472      | -            | -                | -                | -         |    -1.92 | Airax, Jelo, ottoNd, puuha, uli  |
|           12 |     2833 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.465      | 0.384        | 0.031 (0.006)    | 0.537 (0.096)    | 0 (0.000) |    12.09 | Airax, Jelo, ottoNd, puuha, uli  |
|           11 |     2858 | 2024-04-17 | PARIVISION        | L   | 0.460      | -            | -                | -                | -         |    -1.53 | Airax, Jelo, ottoNd, puuha, uli  |
|           10 |     2919 | 2024-04-15 | Alliance          | L   | 0.446      | -            | -                | -                | -         |    -4.10 | Airax, Jelo, ottoNd, puuha, uli  |
|            9 |     3096 | 2024-04-09 | BLEED             | L   | 0.405      | -            | -                | -                | -         |    -2.18 | Airax, Jelo, ottoNd, puuha, uli  |
|            8 |     3122 | 2024-04-08 | Permitta          | L   | 0.399      | -            | -                | -                | -         |    -2.13 | Airax, Jelo, ottoNd, puuha, uli  |
|            7 |     3224 | 2024-04-04 | Passion UA        | L   | 0.372      | -            | -                | -                | -         |    -1.53 | Airax, Jelo, ottoNd, puuha, uli  |
|            6 |     3952 | 2024-03-02 | Sangal            | L   | 0.151      | -            | -                | -                | -         |    -0.34 | Airax, Banjo, ottoNd, puuha, uli |
|            5 |     3976 | 2024-02-29 | KOI               | L   | 0.139      | -            | -                | -                | -         |    -0.47 | Airax, Banjo, ottoNd, puuha, uli |
|            4 |     3980 | 2024-02-29 | Aurora            | L   | 0.138      | -            | -                | -                | -         |    -0.02 | Airax, Banjo, ottoNd, puuha, uli |
|            3 |     3987 | 2024-02-28 | Spirit Academy    | L   | 0.133      | -            | -                | -                | -         |    -2.98 | Airax, Banjo, ottoNd, puuha, uli |
|            2 |     4067 | 2024-02-24 | ENCE Academy      | L   | 0.108      | -            | -                | -                | -         |    -1.67 | Airax, Banjo, ottoNd, puuha, uli |
|            1 |     4080 | 2024-02-24 | Rounds            | W   | 0.107      | 0.306        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.107) |     0.51 | Airax, Banjo, ottoNd, puuha, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($174.20)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
