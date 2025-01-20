### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Neityu, PR, TOBIZ, xelex<br />
Global Rank: [159](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [107]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  697.2<br />
<br />
Final Rank Value (697.2) = Starting Rank Value (681.9) + Head To Head Adjustments (15.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 681.9
- 400 + ( ( 0.142 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 681.9


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
|           20 |     2557 | 2024-09-10 | Sampi             | L   | 0.338      | -            | -                | -                | -         |    -1.80 | Burmylov, Neityu, PR, TOBIZ, xelex  |
|           19 |     2574 | 2024-09-09 | ECLOT             | L   | 0.331      | -            | -                | -                | -         |    -0.32 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           18 |     2582 | 2024-09-08 | ZEROvariant       | W   | 0.326      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.62 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           17 |     2674 | 2024-09-05 | HOTU              | L   | 0.306      | -            | -                | -                | -         |    -4.33 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           16 |     2880 | 2024-08-29 | TSM               | W   | 0.258      | 0.384        | 0.034 (0.003)    | 0.409 (0.041)    | 0 (0.000) |     6.13 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           15 |     2920 | 2024-08-28 | Monte             | L   | 0.252      | -            | -                | -                | -         |    -1.10 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           14 |     3000 | 2024-08-27 | ALTERNATE aTTaX   | L   | 0.244      | -            | -                | -                | -         |    -0.71 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           13 |     3035 | 2024-08-26 | CYBERSHOKE        | W   | 0.240      | 0.435        | 0.018 (0.002)    | 0.627 (0.065)    | 0 (0.000) |     5.35 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           12 |     3263 | 2024-08-21 | Into the Breach   | W   | 0.204      | 0.384        | 0.006 (0.000)    | 0.512 (0.040)    | 0 (0.000) |     4.84 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           11 |     3363 | 2024-08-17 | GUN5              | L   | 0.179      | -            | -                | -                | -         |    -0.57 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           10 |     3374 | 2024-08-17 | RUSTEC            | W   | 0.179      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.94 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|            9 |     3430 | 2024-08-15 | CYBERSHOKE        | L   | 0.165      | -            | -                | -                | -         |    -1.56 | Burmylov, Neityu, PR, sirah, TMB    |
|            8 |     3452 | 2024-08-14 | kONO              | W   | 0.157      | 0.384        | 0.045 (0.003)    | 0.739 (0.045)    | 0 (0.000) |     3.97 | Burmylov, Neityu, PR, sirah, TMB    |
|            7 |     3606 | 2024-08-09 | Endpoint          | L   | 0.125      | -            | -                | -                | -         |    -1.12 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|            6 |     3635 | 2024-08-08 | AMKAL             | W   | 0.118      | 0.426        | 0.044 (0.002)    | 0.275 (0.014)    | 0 (0.000) |     2.66 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|            5 |     3804 | 2024-08-03 | 1WIN              | L   | 0.087      | -            | -                | -                | -         |    -1.49 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|            4 |     4012 | 2024-07-29 | CYBERSHOKE        | W   | 0.052      | 0.426        | 0.018 (0.000)    | 0.627 (0.014)    | 0 (0.000) |     1.16 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            3 |     4015 | 2024-07-29 | Monte Gen         | W   | 0.051      | 0.426        | 0.039 (0.001)    | 0.501 (0.011)    | 0 (0.000) |     1.11 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            2 |     4071 | 2024-07-27 | fnatic            | L   | 0.039      | -            | -                | -                | -         |    -0.09 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            1 |     4143 | 2024-07-25 | Aurora Young Blud | W   | 0.024      | 0.435        | 0.045 (0.000)    | 0.838 (0.009)    | 0 (0.000) |     0.61 | Burmylov, Chr1zN, Neityu, PR, sirah |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($780.69)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-14 |      0.366 | $500.00        | $183.01         |
| 2024-08-28 |      0.253 | $2,000.00      | $505.60         |
| 2024-07-28 |      0.046 | $2,000.00      | $92.07          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
