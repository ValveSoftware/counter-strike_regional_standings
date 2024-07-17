### Roster Details<br />
Team Name: HAVU<br />
Roster: Airax, Jelo, ottoNd, puuha, uli<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [143](../standings_global.md)<br />
Regional Rank: [94]( ../standings_europe.md)<br />
Final Rank Value:  764.3<br />
<br />
Final Rank Value (764.3) = Starting Rank Value (768.7) + Head To Head Adjustments (-4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.263[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.072[<sup>2</sup>](#table1)
- LAN Wins: 0.028[<sup>2</sup>](#table1)

The average of these factors is 0.172<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 768.7
- 400 + ( ( 0.172 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 768.7


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
|           30 |       11 | 2024-07-17 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |    -5.38 | Airax, Jelo, ottoNd, puuha, uli  |
|           29 |      562 | 2024-06-09 | Zero Tenacity     | L   | 0.946      | -            | -                | -                | -         |    -4.04 | Airax, Jelo, ottoNd, puuha, uli  |
|           28 |      663 | 2024-06-07 | GUN5              | L   | 0.934      | -            | -                | -                | -         |    -5.42 | Airax, Jelo, ottoNd, puuha, uli  |
|           27 |      752 | 2024-06-06 | Sampi             | L   | 0.926      | -            | -                | -                | -         |    -7.68 | Airax, Jelo, ottoNd, puuha, uli  |
|           26 |      872 | 2024-06-03 | RUBY              | W   | 0.906      | 0.435        | 0.144 (0.057)    | 0.580 (0.228)    | 0 (0.000) |    22.72 | Airax, Jelo, ottoNd, puuha, uli  |
|           25 |      883 | 2024-06-02 | UHKA              | W   | 0.900      | 0.143        | 0.000 (0.000)    | 0.037 (0.005)    | 0 (0.000) |     3.50 | Airax, Jelo, ottoNd, puuha, uli  |
|           24 |      897 | 2024-06-02 | Heimo             | W   | 0.899      | 0.143        | 0.009 (0.001)    | 0.058 (0.008)    | 0 (0.000) |    12.27 | Airax, Jelo, ottoNd, puuha, uli  |
|           23 |     1672 | 2024-05-05 | RUBY              | L   | 0.713      | -            | -                | -                | -         |    -4.70 | Airax, Jelo, ottoNd, puuha, uli  |
|           22 |     1685 | 2024-05-04 | RUSH B            | L   | 0.707      | -            | -                | -                | -         |    -7.55 | Airax, Jelo, ottoNd, puuha, uli  |
|           21 |     1726 | 2024-05-02 | Gaimin Gladiators | L   | 0.693      | -            | -                | -                | -         |    -2.59 | Airax, Jelo, ottoNd, puuha, uli  |
|           20 |     1735 | 2024-05-02 | Zero Tenacity     | L   | 0.692      | -            | -                | -                | -         |    -3.17 | Airax, Jelo, ottoNd, puuha, uli  |
|           19 |     1775 | 2024-04-30 | EYEBALLERS        | W   | 0.679      | 0.384        | 0.009 (0.002)    | 0.619 (0.162)    | 0 (0.000) |    15.65 | Airax, Jelo, ottoNd, puuha, uli  |
|           18 |     1794 | 2024-04-29 | Insilio           | W   | 0.673      | 0.435        | 0.035 (0.010)    | 0.570 (0.167)    | 0 (0.000) |    17.10 | Airax, Jelo, ottoNd, puuha, uli  |
|           17 |     1887 | 2024-04-25 | EYEBALLERS        | L   | 0.647      | -            | -                | -                | -         |    -5.31 | Airax, Jelo, ottoNd, puuha, uli  |
|           16 |     1899 | 2024-04-25 | kONO              | L   | 0.645      | -            | -                | -                | -         |    -6.91 | Airax, Jelo, ottoNd, puuha, uli  |
|           15 |     1927 | 2024-04-23 | 1WIN              | L   | 0.633      | -            | -                | -                | -         |    -4.25 | Airax, Jelo, ottoNd, puuha, uli  |
|           14 |     1947 | 2024-04-22 | SINNERS           | L   | 0.626      | -            | -                | -                | -         |    -2.23 | Airax, Jelo, ottoNd, puuha, uli  |
|           13 |     2043 | 2024-04-19 | B8                | L   | 0.606      | -            | -                | -                | -         |    -2.48 | Airax, Jelo, ottoNd, puuha, uli  |
|           12 |     2095 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.599      | 0.384        | 0.050 (0.011)    | 0.644 (0.148)    | 0 (0.000) |    15.53 | Airax, Jelo, ottoNd, puuha, uli  |
|           11 |     2120 | 2024-04-17 | PARIVISION        | L   | 0.594      | -            | -                | -                | -         |    -4.23 | Airax, Jelo, ottoNd, puuha, uli  |
|           10 |     2181 | 2024-04-15 | Alliance          | L   | 0.580      | -            | -                | -                | -         |    -5.06 | Airax, Jelo, ottoNd, puuha, uli  |
|            9 |     2358 | 2024-04-09 | BLEED             | L   | 0.539      | -            | -                | -                | -         |    -2.18 | Airax, Jelo, ottoNd, puuha, uli  |
|            8 |     2384 | 2024-04-08 | Permitta          | L   | 0.533      | -            | -                | -                | -         |    -3.67 | Airax, Jelo, ottoNd, puuha, uli  |
|            7 |     2486 | 2024-04-04 | Passion UA        | L   | 0.506      | -            | -                | -                | -         |    -3.64 | Airax, Jelo, ottoNd, puuha, uli  |
|            6 |     3214 | 2024-03-02 | Sangal            | L   | 0.285      | -            | -                | -                | -         |    -0.88 | Airax, Banjo, ottoNd, puuha, uli |
|            5 |     3238 | 2024-02-29 | KOI               | L   | 0.273      | -            | -                | -                | -         |    -0.67 | Airax, Banjo, ottoNd, puuha, uli |
|            4 |     3242 | 2024-02-29 | Aurora            | L   | 0.272      | -            | -                | -                | -         |    -0.06 | Airax, Banjo, ottoNd, puuha, uli |
|            3 |     3249 | 2024-02-28 | Spirit Academy    | L   | 0.267      | -            | -                | -                | -         |    -6.32 | Airax, Banjo, ottoNd, puuha, uli |
|            2 |     3329 | 2024-02-24 | ENCE Academy      | L   | 0.242      | -            | -                | -                | -         |    -3.63 | Airax, Banjo, ottoNd, puuha, uli |
|            1 |     3342 | 2024-02-24 | Rounds            | W   | 0.241      | 0.306        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.241) |     0.85 | Airax, Banjo, ottoNd, puuha, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($388.88)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
