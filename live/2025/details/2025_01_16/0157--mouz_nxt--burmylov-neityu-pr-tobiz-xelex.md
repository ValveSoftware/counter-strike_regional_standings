### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Neityu, PR, TOBIZ, xelex<br />
Global Rank: [157](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [106]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  702.4<br />
<br />
Final Rank Value (702.4) = Starting Rank Value (686.7) + Head To Head Adjustments (15.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.7
- 400 + ( ( 0.145 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 686.7


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
|           21 |     2580 | 2024-09-10 | Sampi             | L   | 0.344      | -            | -                | -                | -         |    -1.86 | Burmylov, Neityu, PR, TOBIZ, xelex  |
|           20 |     2597 | 2024-09-09 | ECLOT             | L   | 0.337      | -            | -                | -                | -         |    -0.33 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           19 |     2605 | 2024-09-08 | ZEROvariant       | W   | 0.332      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.61 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           18 |     2697 | 2024-09-05 | HOTU              | L   | 0.312      | -            | -                | -                | -         |    -4.47 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           17 |     2903 | 2024-08-29 | TSM               | W   | 0.264      | 0.384        | 0.034 (0.004)    | 0.412 (0.042)    | 0 (0.000) |     6.29 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           16 |     2943 | 2024-08-28 | Monte             | L   | 0.258      | -            | -                | -                | -         |    -1.15 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           15 |     3023 | 2024-08-27 | ALTERNATE aTTaX   | L   | 0.250      | -            | -                | -                | -         |    -0.75 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           14 |     3058 | 2024-08-26 | CYBERSHOKE        | W   | 0.246      | 0.435        | 0.018 (0.002)    | 0.661 (0.071)    | 0 (0.000) |     5.43 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           13 |     3286 | 2024-08-21 | Into the Breach   | W   | 0.210      | 0.384        | 0.006 (0.000)    | 0.513 (0.041)    | 0 (0.000) |     4.97 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           12 |     3386 | 2024-08-17 | GUN5              | L   | 0.186      | -            | -                | -                | -         |    -0.61 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           11 |     3397 | 2024-08-17 | RUSTEC            | W   | 0.185      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.95 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           10 |     3453 | 2024-08-15 | CYBERSHOKE        | L   | 0.171      | -            | -                | -                | -         |    -1.66 | Burmylov, Neityu, PR, sirah, TMB    |
|            9 |     3475 | 2024-08-14 | kONO              | W   | 0.163      | 0.384        | 0.045 (0.003)    | 0.735 (0.046)    | 0 (0.000) |     4.10 | Burmylov, Neityu, PR, sirah, TMB    |
|            8 |     3629 | 2024-08-09 | Endpoint          | L   | 0.131      | -            | -                | -                | -         |    -1.19 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|            7 |     3658 | 2024-08-08 | AMKAL             | W   | 0.124      | 0.426        | 0.044 (0.002)    | 0.274 (0.014)    | 0 (0.000) |     2.78 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|            6 |     3827 | 2024-08-03 | 1WIN              | L   | 0.093      | -            | -                | -                | -         |    -1.61 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|            5 |     4035 | 2024-07-29 | CYBERSHOKE        | W   | 0.058      | 0.426        | 0.018 (0.000)    | 0.661 (0.016)    | 0 (0.000) |     1.27 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            4 |     4038 | 2024-07-29 | Monte Gen         | W   | 0.058      | 0.426        | 0.039 (0.001)    | 0.501 (0.012)    | 0 (0.000) |     1.23 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            3 |     4094 | 2024-07-27 | fnatic            | L   | 0.045      | -            | -                | -                | -         |    -0.10 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            2 |     4166 | 2024-07-25 | Aurora Young Blud | W   | 0.030      | 0.435        | 0.045 (0.001)    | 0.839 (0.011)    | 0 (0.000) |     0.77 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            1 |     4289 | 2024-07-21 | fnatic            | L   | 0.004      | -            | -                | -                | -         |    -0.01 | Burmylov, Chr1zN, Neityu, PR, sirah |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($953.55)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-14 |      0.372 | $500.00        | $186.07         |
| 2024-08-28 |      0.259 | $2,000.00      | $517.81         |
| 2024-07-28 |      0.052 | $2,000.00      | $104.29         |
| 2024-07-22 |      0.012 | $12,500.00     | $145.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
