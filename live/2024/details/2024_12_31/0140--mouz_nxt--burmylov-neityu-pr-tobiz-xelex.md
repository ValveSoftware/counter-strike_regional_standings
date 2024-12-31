### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Neityu, PR, TOBIZ, xelex<br />
Global Rank: [140](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [102]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  758.4<br />
<br />
Final Rank Value (758.4) = Starting Rank Value (728.2) + Head To Head Adjustments (30.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.054[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 728.2
- 400 + ( ( 0.168 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 728.2


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
|           25 |     2497 | 2024-09-10 | Sampi             | L   | 0.465      | -            | -                | -                | -         |    -3.20 | Burmylov, Neityu, PR, TOBIZ, xelex  |
|           24 |     2514 | 2024-09-09 | ECLOT             | L   | 0.458      | -            | -                | -                | -         |    -0.66 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           23 |     2522 | 2024-09-08 | ZEROvariant       | W   | 0.454      | -            | -                | -                | 0 (0.000) |     1.66 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           22 |     2614 | 2024-09-05 | HOTU              | L   | 0.434      | -            | -                | -                | -         |    -7.05 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           21 |     2820 | 2024-08-29 | TSM               | W   | 0.385      | 0.384        | 0.037 (0.005)    | 0.519 (0.077)    | 0 (0.000) |     9.03 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           20 |     2860 | 2024-08-28 | Monte             | L   | 0.380      | -            | -                | -                | -         |    -2.07 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           19 |     2940 | 2024-08-27 | ALTERNATE aTTaX   | L   | 0.371      | -            | -                | -                | -         |    -1.56 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           18 |     2975 | 2024-08-26 | CYBERSHOKE        | W   | 0.367      | 0.435        | 0.017 (0.003)    | 0.699 (0.112)    | 0 (0.000) |     7.84 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           17 |     3203 | 2024-08-21 | Into the Breach   | W   | 0.331      | 0.384        | 0.006 (0.001)    | 0.575 (0.073)    | 0 (0.000) |     7.51 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           16 |     3303 | 2024-08-17 | GUN5              | L   | 0.307      | -            | -                | -                | -         |    -1.54 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           15 |     3314 | 2024-08-17 | RUSTEC            | W   | 0.306      | -            | -                | -                | 0 (0.000) |     1.20 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           14 |     3370 | 2024-08-15 | CYBERSHOKE        | L   | 0.292      | -            | -                | -                | -         |    -3.10 | Burmylov, Neityu, PR, sirah, TMB    |
|           13 |     3392 | 2024-08-14 | kONO              | W   | 0.284      | 0.384        | 0.037 (0.004)    | 0.597 (0.065)    | 0 (0.000) |     6.59 | Burmylov, Neityu, PR, sirah, TMB    |
|           12 |     3546 | 2024-08-09 | Endpoint          | L   | 0.252      | -            | -                | -                | -         |    -2.58 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           11 |     3575 | 2024-08-08 | AMKAL             | W   | 0.245      | 0.426        | 0.043 (0.004)    | 0.279 (0.029)    | 0 (0.000) |     5.22 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           10 |     3744 | 2024-08-03 | 1WIN              | L   | 0.214      | -            | -                | -                | -         |    -3.93 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|            9 |     3952 | 2024-07-29 | CYBERSHOKE        | W   | 0.180      | 0.426        | 0.017 (0.001)    | 0.699 (0.054)    | 0 (0.000) |     3.76 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            8 |     3955 | 2024-07-29 | Monte Gen         | W   | 0.179      | 0.426        | 0.033 (0.003)    | 0.537 (0.041)    | 0 (0.000) |     3.53 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            7 |     4011 | 2024-07-27 | fnatic            | L   | 0.166      | -            | -                | -                | -         |    -0.42 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            6 |     4083 | 2024-07-25 | Aurora Young Blud | W   | 0.151      | 0.435        | 0.039 (0.003)    | 0.888 (0.058)    | 0 (0.000) |     3.65 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            5 |     4206 | 2024-07-21 | fnatic            | L   | 0.125      | -            | -                | -                | -         |    -0.32 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            4 |     4246 | 2024-07-20 | UNPAID            | W   | 0.119      | 0.500        | 0.130 (0.008)    | 0.265 (0.016)    | -         |     3.25 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            3 |     4258 | 2024-07-19 | Rhyno             | W   | 0.114      | 0.500        | 0.007 (0.000)    | 0.258 (0.015)    | -         |     2.02 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            2 |     4311 | 2024-07-18 | Ninjas in Pyjamas | L   | 0.107      | -            | -                | -                | -         |    -0.30 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            1 |     4457 | 2024-07-16 | Rhyno             | W   | 0.092      | -            | -                | -                | -         |     1.64 | Burmylov, Chr1zN, Neityu, PR, sirah |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,013.82)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-14 |      0.493 | $500.00        | $246.66         |
| 2024-08-28 |      0.380 | $2,000.00      | $760.20         |
| 2024-07-28 |      0.173 | $2,000.00      | $346.67         |
| 2024-07-22 |      0.133 | $12,500.00     | $1,660.29       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
