### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Neityu, PR, TOBIZ, xelex<br />
Global Rank: [152](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [105]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  717.0<br />
<br />
Final Rank Value (717.0) = Starting Rank Value (698.7) + Head To Head Adjustments (18.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.308[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 698.7
- 400 + ( ( 0.151 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 698.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |     2553 | 2024-09-10 | Sampi             | L   | 0.366      | -            | -                | -                | -         |    -2.08 | Burmylov, Neityu, PR, TOBIZ, xelex  |
|           23 |     2570 | 2024-09-09 | ECLOT             | L   | 0.360      | -            | -                | -                | -         |    -0.38 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           22 |     2578 | 2024-09-08 | ZEROvariant       | W   | 0.355      | -            | -                | -                | 0 (0.000) |     1.60 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           21 |     2670 | 2024-09-05 | HOTU              | L   | 0.335      | -            | -                | -                | -         |    -4.95 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           20 |     2876 | 2024-08-29 | TSM               | W   | 0.286      | 0.384        | 0.035 (0.004)    | 0.425 (0.047)    | 0 (0.000) |     6.75 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           19 |     2916 | 2024-08-28 | Monte             | L   | 0.281      | -            | -                | -                | -         |    -1.30 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           18 |     2996 | 2024-08-27 | ALTERNATE aTTaX   | L   | 0.272      | -            | -                | -                | -         |    -0.87 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           17 |     3031 | 2024-08-26 | CYBERSHOKE        | W   | 0.268      | 0.435        | 0.018 (0.002)    | 0.633 (0.074)    | 0 (0.000) |     5.91 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           16 |     3259 | 2024-08-21 | Into the Breach   | W   | 0.232      | 0.384        | 0.006 (0.001)    | 0.518 (0.046)    | 0 (0.000) |     5.44 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           15 |     3359 | 2024-08-17 | GUN5              | L   | 0.208      | -            | -                | -                | -         |    -0.74 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           14 |     3370 | 2024-08-17 | RUSTEC            | W   | 0.207      | -            | -                | -                | 0 (0.000) |     0.99 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           13 |     3426 | 2024-08-15 | CYBERSHOKE        | L   | 0.193      | -            | -                | -                | -         |    -1.90 | Burmylov, Neityu, PR, sirah, TMB    |
|           12 |     3448 | 2024-08-14 | kONO              | W   | 0.186      | 0.384        | 0.044 (0.003)    | 0.721 (0.051)    | 0 (0.000) |     4.60 | Burmylov, Neityu, PR, sirah, TMB    |
|           11 |     3602 | 2024-08-09 | Endpoint          | L   | 0.153      | -            | -                | -                | -         |    -1.42 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           10 |     3631 | 2024-08-08 | AMKAL             | W   | 0.146      | 0.426        | 0.045 (0.003)    | 0.272 (0.017)    | 0 (0.000) |     3.25 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|            9 |     3800 | 2024-08-03 | 1WIN              | L   | 0.115      | -            | -                | -                | -         |    -2.03 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|            8 |     4008 | 2024-07-29 | CYBERSHOKE        | W   | 0.081      | 0.426        | 0.018 (0.001)    | 0.633 (0.022)    | 0 (0.000) |     1.75 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            7 |     4011 | 2024-07-29 | Monte Gen         | W   | 0.080      | 0.426        | 0.038 (0.001)    | 0.502 (0.017)    | 0 (0.000) |     1.68 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            6 |     4067 | 2024-07-27 | fnatic            | L   | 0.068      | -            | -                | -                | -         |    -0.16 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            5 |     4139 | 2024-07-25 | Aurora Young Blud | W   | 0.052      | 0.435        | 0.045 (0.001)    | 0.841 (0.019)    | 0 (0.000) |     1.33 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            4 |     4262 | 2024-07-21 | fnatic            | L   | 0.026      | -            | -                | -                | -         |    -0.06 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            3 |     4302 | 2024-07-20 | UNPAID            | W   | 0.020      | 0.500        | 0.141 (0.001)    | 0.216 (0.002)    | -         |     0.54 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            2 |     4314 | 2024-07-19 | Rhyno             | W   | 0.015      | 0.500        | 0.008 (0.000)    | 0.216 (0.002)    | -         |     0.28 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            1 |     4367 | 2024-07-18 | Ninjas in Pyjamas | L   | 0.008      | -            | -                | -                | -         |    -0.02 | Burmylov, Chr1zN, Neityu, PR, sirah |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,333.70)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-14 |      0.394 | $500.00        | $197.25         |
| 2024-08-28 |      0.281 | $2,000.00      | $562.54         |
| 2024-07-28 |      0.075 | $2,000.00      | $149.01         |
| 2024-07-22 |      0.034 | $12,500.00     | $424.90         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
