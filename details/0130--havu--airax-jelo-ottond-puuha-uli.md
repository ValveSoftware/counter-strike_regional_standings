### Roster Details<br />
Team Name: HAVU<br />
Roster: Airax, Jelo, ottoNd, puuha, uli<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [130](../standings_global.md)<br />
Regional Rank: [86]( ../standings_europe.md)<br />
Final Rank Value:  771.2<br />
<br />
Final Rank Value (771.2) = Starting Rank Value (773.3) + Head To Head Adjustments (-2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.089[<sup>2</sup>](#table1)
- LAN Wins: 0.045[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 773.3
- 400 + ( ( 0.184 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 773.3


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
|           33 |      262 | 2024-06-09 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -4.29 | Airax, Jelo, ottoNd, puuha, uli  |
|           32 |      363 | 2024-06-07 | GUN5              | L   | 1.000      | -            | -                | -                | -         |    -6.09 | Airax, Jelo, ottoNd, puuha, uli  |
|           31 |      452 | 2024-06-06 | Sampi             | L   | 1.000      | -            | -                | -                | -         |    -8.37 | Airax, Jelo, ottoNd, puuha, uli  |
|           30 |      572 | 2024-06-03 | RUBY              | W   | 1.000      | 0.435        | 0.121 (0.053)    | 0.574 (0.249)    | 0 (0.000) |    24.66 | Airax, Jelo, ottoNd, puuha, uli  |
|           29 |      583 | 2024-06-02 | UHKA              | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.036 (0.005)    | 0 (0.000) |     3.88 | Airax, Jelo, ottoNd, puuha, uli  |
|           28 |      598 | 2024-06-02 | Heimo             | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.064 (0.009)    | 0 (0.000) |    13.13 | Airax, Jelo, ottoNd, puuha, uli  |
|           27 |     1374 | 2024-05-05 | RUBY              | L   | 0.908      | -            | -                | -                | -         |    -6.75 | Airax, Jelo, ottoNd, puuha, uli  |
|           26 |     1387 | 2024-05-04 | RUSH B            | L   | 0.902      | -            | -                | -                | -         |    -9.82 | Airax, Jelo, ottoNd, puuha, uli  |
|           25 |     1428 | 2024-05-02 | Gaimin Gladiators | L   | 0.889      | -            | -                | -                | -         |    -2.46 | Airax, Jelo, ottoNd, puuha, uli  |
|           24 |     1437 | 2024-05-02 | Zero Tenacity     | L   | 0.887      | -            | -                | -                | -         |    -4.20 | Airax, Jelo, ottoNd, puuha, uli  |
|           23 |     1477 | 2024-04-30 | EYEBALLERS        | W   | 0.875      | 0.384        | 0.006 (0.002)    | 0.653 (0.220)    | 0 (0.000) |    20.04 | Airax, Jelo, ottoNd, puuha, uli  |
|           22 |     1496 | 2024-04-29 | Insilio           | W   | 0.868      | 0.435        | 0.032 (0.012)    | 0.578 (0.218)    | 0 (0.000) |    22.33 | Airax, Jelo, ottoNd, puuha, uli  |
|           21 |     1589 | 2024-04-25 | EYEBALLERS        | L   | 0.843      | -            | -                | -                | -         |    -7.09 | Airax, Jelo, ottoNd, puuha, uli  |
|           20 |     1601 | 2024-04-25 | kONO              | L   | 0.840      | -            | -                | -                | -         |    -9.65 | Airax, Jelo, ottoNd, puuha, uli  |
|           19 |     1629 | 2024-04-23 | 1WIN              | L   | 0.829      | -            | -                | -                | -         |    -4.86 | Airax, Jelo, ottoNd, puuha, uli  |
|           18 |     1649 | 2024-04-22 | SINNERS           | L   | 0.821      | -            | -                | -                | -         |    -2.99 | Airax, Jelo, ottoNd, puuha, uli  |
|           17 |     1745 | 2024-04-19 | B8                | L   | 0.801      | -            | -                | -                | -         |    -3.55 | Airax, Jelo, ottoNd, puuha, uli  |
|           16 |     1797 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.794      | 0.384        | 0.046 (0.014)    | 0.573 (0.175)    | 0 (0.000) |    19.76 | Airax, Jelo, ottoNd, puuha, uli  |
|           15 |     1822 | 2024-04-17 | PARIVISION        | L   | 0.789      | -            | -                | -                | -         |    -5.41 | Airax, Jelo, ottoNd, puuha, uli  |
|           14 |     1883 | 2024-04-15 | Alliance          | L   | 0.775      | -            | -                | -                | -         |    -6.95 | Airax, Jelo, ottoNd, puuha, uli  |
|           13 |     2060 | 2024-04-09 | BLEED             | L   | 0.734      | -            | -                | -                | -         |    -0.75 | Airax, Jelo, ottoNd, puuha, uli  |
|           12 |     2086 | 2024-04-08 | Permitta          | L   | 0.728      | -            | -                | -                | -         |    -5.10 | Airax, Jelo, ottoNd, puuha, uli  |
|           11 |     2188 | 2024-04-04 | Passion UA        | L   | 0.701      | -            | -                | -                | -         |    -5.42 | Airax, Jelo, ottoNd, puuha, uli  |
|           10 |     2917 | 2024-03-02 | Sangal            | L   | 0.480      | -            | -                | -                | -         |    -1.72 | Airax, Banjo, ottoNd, puuha, uli |
|            9 |     2941 | 2024-02-29 | KOI               | L   | 0.468      | -            | -                | -                | -         |    -1.20 | Airax, Banjo, ottoNd, puuha, uli |
|            8 |     2945 | 2024-02-29 | Aurora            | L   | 0.467      | -            | -                | -                | -         |    -0.12 | Airax, Banjo, ottoNd, puuha, uli |
|            7 |     2952 | 2024-02-28 | Spirit Academy    | L   | 0.462      | -            | -                | -                | -         |    -8.87 | Airax, Banjo, ottoNd, puuha, uli |
|            6 |     3032 | 2024-02-24 | ENCE Academy      | L   | 0.437      | -            | -                | -                | -         |    -6.43 | Airax, Banjo, ottoNd, puuha, uli |
|            5 |     3045 | 2024-02-24 | Rounds            | W   | 0.436      | 0.306        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.436) |     1.47 | Airax, Banjo, ottoNd, puuha, uli |
|            4 |     4170 | 2024-01-11 | HEROIC            | L   | 0.142      | -            | -                | -                | -         |    -0.01 | Airax, Banjo, ottoNd, sLowi, uli |
|            3 |     4177 | 2024-01-10 | TSM               | W   | 0.137      | 0.143        | 0.007 (0.000)    | 0.127 (0.002)    | 0 (0.000) |     1.88 | Airax, Banjo, ottoNd, sLowi, uli |
|            2 |     4231 | 2024-01-09 | fnatic            | L   | 0.129      | -            | -                | -                | -         |    -0.04 | Airax, Banjo, ottoNd, sLowi, uli |
|            1 |     4244 | 2024-01-09 | Sampi             | W   | 0.129      | 0.143        | 0.045 (0.001)    | 0.837 (0.015)    | 0 (0.000) |     2.91 | Airax, Banjo, ottoNd, sLowi, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($702.51)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
