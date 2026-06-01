### Roster Details<br />
Team Name: ENCE<br />
Roster: F1KU, kRaSnaL, Neityu, podi, sdy<br />
Global Rank: [128](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [85]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  954.6<br />
<br />
Final Rank Value (954.6) = Starting Rank Value (892.6) + Head To Head Adjustments (62.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.341[<sup>2</sup>](#table1)
- Opponent Network: 0.158[<sup>2</sup>](#table1)
- LAN Wins: 0.232[<sup>2</sup>](#table1)

The average of these factors is 0.259<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 892.6
- 400 + ( ( 0.259 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 892.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |     1717 | 2026-04-08 | ASTRAL          | L   | 0.838      | -            | -                | -                | -         |   -11.45 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           23 |     3670 | 2026-03-05 | fnatic          | L   | 0.614      | -            | -                | -                | -         |    -6.01 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           22 |     3949 | 2026-02-27 | Eternal Fire    | L   | 0.573      | -            | -                | -                | -         |    -4.19 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           21 |     3996 | 2026-02-26 | ASTRAL          | W   | 0.568      | 0.354        | 0.008 (0.002)    | 0.874 (0.176)    | 1 (0.568) |    10.52 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           20 |     4004 | 2026-02-26 | BESTIA          | W   | 0.567      | 0.354        | 0.016 (0.003)    | 0.659 (0.132)    | 1 (0.567) |    14.83 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           19 |     4017 | 2026-02-26 | CYBERSHOKE      | L   | 0.566      | -            | -                | -                | -         |    -3.38 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           18 |     4064 | 2026-02-25 | 100 Thieves     | W   | 0.560      | 0.354        | 0.025 (0.005)    | 0.674 (0.134)    | 1 (0.560) |    15.83 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           17 |     4710 | 2026-02-13 | illwill         | L   | 0.480      | -            | -                | -                | -         |    -3.62 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           16 |     4722 | 2026-02-13 | Tricked         | W   | 0.479      | 0.333        | 0.034 (0.006)    | 0.574 (0.092)    | 1 (0.479) |    13.11 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           15 |     4727 | 2026-02-13 | illwill         | L   | 0.478      | -            | -                | -                | -         |    -3.48 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           14 |     4779 | 2026-02-11 | fnatic          | L   | 0.469      | -            | -                | -                | -         |    -4.25 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           13 |     4790 | 2026-02-11 | Alliance        | W   | 0.467      | 0.769        | 0.100 (0.036)    | 0.840 (0.302)    | 0 (0.000) |    13.79 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           12 |     4799 | 2026-02-11 | EYEBALLERS      | W   | 0.466      | 0.769        | 0.126 (0.045)    | 0.534 (0.191)    | 0 (0.000) |    13.84 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           11 |     4834 | 2026-02-10 | BetBoom         | L   | 0.460      | -            | -                | -                | -         |    -0.46 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           10 |     4839 | 2026-02-10 | CYBERSHOKE      | W   | 0.459      | 0.769        | 0.024 (0.009)    | 0.599 (0.211)    | 0 (0.000) |    12.37 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            9 |     5002 | 2026-02-04 | ex-RUBY         | L   | 0.419      | -            | -                | -                | -         |    -5.46 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            8 |     5185 | 2026-01-29 | Nemiga          | L   | 0.380      | -            | -                | -                | -         |    -1.06 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            7 |     5214 | 2026-01-28 | ex-RUBY         | W   | 0.373      | 0.435        | 0.033 (0.005)    | 0.989 (0.160)    | 0 (0.000) |     6.87 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            6 |     5545 | 2026-01-17 | Nuclear TigeRES | L   | 0.301      | -            | -                | -                | -         |    -0.68 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            5 |     5561 | 2026-01-17 | INOX Division   | W   | 0.300      | 0.624        | 0.027 (0.005)    | 0.900 (0.169)    | 0 (0.000) |     4.71 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            4 |     5635 | 2026-01-16 | PARIVISION      | L   | 0.292      | -            | -                | -                | -         |    -0.07 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            3 |     5918 | 2025-12-19 | Lazer Cats      | L   | 0.107      | -            | -                | -                | -         |    -1.77 | myltsi, Neityu, podi, rigoN, sdy |
|            2 |     5922 | 2025-12-19 | Walczaki        | L   | 0.106      | -            | -                | -                | -         |    -0.57 | myltsi, Neityu, podi, rigoN, sdy |
|            1 |     5940 | 2025-12-18 | The Huns        | W   | 0.099      | 0.339        | 0.045 (0.001)    | 0.454 (0.015)    | 1 (0.099) |     2.63 | myltsi, Neityu, podi, rigoN, sdy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,084.90)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-30 |      0.388 | $2,000.00      | $775.54         |
| 2026-01-18 |      0.308 | $7,500.00      | $2,309.36       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
