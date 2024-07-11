### Roster Details<br />
Team Name: HAVU<br />
Roster: Airax, Jelo, ottoNd, puuha, uli<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [135](../standings_global.md)<br />
Regional Rank: [86]( ../standings_europe.md)<br />
Final Rank Value:  769.7<br />
<br />
Final Rank Value (769.7) = Starting Rank Value (768.2) + Head To Head Adjustments (1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.266[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.075[<sup>2</sup>](#table1)
- LAN Wins: 0.032[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 768.2
- 400 + ( ( 0.175 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 768.2


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
|           29 |      398 | 2024-06-09 | Zero Tenacity     | L   | 0.985      | -            | -                | -                | -         |    -4.22 | Airax, Jelo, ottoNd, puuha, uli  |
|           28 |      499 | 2024-06-07 | GUN5              | L   | 0.974      | -            | -                | -                | -         |    -5.65 | Airax, Jelo, ottoNd, puuha, uli  |
|           27 |      588 | 2024-06-06 | Slovakia          | L   | 0.965      | -            | -                | -                | -         |    -8.16 | Airax, Jelo, ottoNd, puuha, uli  |
|           26 |      708 | 2024-06-03 | RUBY              | W   | 0.946      | 0.435        | 0.139 (0.057)    | 0.563 (0.231)    | 0 (0.000) |    23.46 | Airax, Jelo, ottoNd, puuha, uli  |
|           25 |      719 | 2024-06-02 | UHKA              | W   | 0.940      | 0.143        | 0.000 (0.000)    | 0.038 (0.005)    | 0 (0.000) |     3.65 | Airax, Jelo, ottoNd, puuha, uli  |
|           24 |      733 | 2024-06-02 | Heimo             | W   | 0.939      | 0.143        | 0.009 (0.001)    | 0.061 (0.008)    | 0 (0.000) |    12.67 | Airax, Jelo, ottoNd, puuha, uli  |
|           23 |     1508 | 2024-05-05 | RUBY              | L   | 0.752      | -            | -                | -                | -         |    -5.28 | Airax, Jelo, ottoNd, puuha, uli  |
|           22 |     1521 | 2024-05-04 | RUSH B            | L   | 0.746      | -            | -                | -                | -         |    -7.67 | Airax, Jelo, ottoNd, puuha, uli  |
|           21 |     1562 | 2024-05-02 | Gaimin Gladiators | L   | 0.733      | -            | -                | -                | -         |    -2.33 | Airax, Jelo, ottoNd, puuha, uli  |
|           20 |     1571 | 2024-05-02 | Zero Tenacity     | L   | 0.731      | -            | -                | -                | -         |    -3.32 | Airax, Jelo, ottoNd, puuha, uli  |
|           19 |     1611 | 2024-04-30 | EYEBALLERS        | W   | 0.719      | 0.384        | 0.009 (0.002)    | 0.646 (0.179)    | 0 (0.000) |    16.57 | Airax, Jelo, ottoNd, puuha, uli  |
|           18 |     1630 | 2024-04-29 | Insilio           | W   | 0.712      | 0.435        | 0.035 (0.011)    | 0.587 (0.182)    | 0 (0.000) |    18.09 | Airax, Jelo, ottoNd, puuha, uli  |
|           17 |     1723 | 2024-04-25 | EYEBALLERS        | L   | 0.687      | -            | -                | -                | -         |    -5.67 | Airax, Jelo, ottoNd, puuha, uli  |
|           16 |     1735 | 2024-04-25 | kONO              | L   | 0.685      | -            | -                | -                | -         |    -7.49 | Airax, Jelo, ottoNd, puuha, uli  |
|           15 |     1763 | 2024-04-23 | 1WIN              | L   | 0.673      | -            | -                | -                | -         |    -4.27 | Airax, Jelo, ottoNd, puuha, uli  |
|           14 |     1783 | 2024-04-22 | SINNERS           | L   | 0.665      | -            | -                | -                | -         |    -2.33 | Airax, Jelo, ottoNd, puuha, uli  |
|           13 |     1879 | 2024-04-19 | B8                | L   | 0.646      | -            | -                | -                | -         |    -2.65 | Airax, Jelo, ottoNd, puuha, uli  |
|           12 |     1931 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.639      | 0.384        | 0.050 (0.012)    | 0.577 (0.142)    | 0 (0.000) |    16.48 | Airax, Jelo, ottoNd, puuha, uli  |
|           11 |     1956 | 2024-04-17 | PARIVISION        | L   | 0.634      | -            | -                | -                | -         |    -4.32 | Airax, Jelo, ottoNd, puuha, uli  |
|           10 |     2017 | 2024-04-15 | Alliance          | L   | 0.619      | -            | -                | -                | -         |    -5.29 | Airax, Jelo, ottoNd, puuha, uli  |
|            9 |     2194 | 2024-04-09 | BLEED             | L   | 0.579      | -            | -                | -                | -         |    -0.55 | Airax, Jelo, ottoNd, puuha, uli  |
|            8 |     2220 | 2024-04-08 | Permitta          | L   | 0.572      | -            | -                | -                | -         |    -3.95 | Airax, Jelo, ottoNd, puuha, uli  |
|            7 |     2322 | 2024-04-04 | Passion UA        | L   | 0.546      | -            | -                | -                | -         |    -4.00 | Airax, Jelo, ottoNd, puuha, uli  |
|            6 |     3050 | 2024-03-02 | Sangal            | L   | 0.325      | -            | -                | -                | -         |    -1.01 | Airax, Banjo, ottoNd, puuha, uli |
|            5 |     3074 | 2024-02-29 | KOI               | L   | 0.313      | -            | -                | -                | -         |    -0.79 | Airax, Banjo, ottoNd, puuha, uli |
|            4 |     3078 | 2024-02-29 | Aurora            | L   | 0.312      | -            | -                | -                | -         |    -0.06 | Airax, Banjo, ottoNd, puuha, uli |
|            3 |     3085 | 2024-02-28 | Spirit Academy    | L   | 0.307      | -            | -                | -                | -         |    -7.21 | Airax, Banjo, ottoNd, puuha, uli |
|            2 |     3165 | 2024-02-24 | ENCE Academy      | L   | 0.282      | -            | -                | -                | -         |    -4.21 | Airax, Banjo, ottoNd, puuha, uli |
|            1 |     3178 | 2024-02-24 | Rounds            | W   | 0.280      | 0.306        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.280) |     0.99 | Airax, Banjo, ottoNd, puuha, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($452.50)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
