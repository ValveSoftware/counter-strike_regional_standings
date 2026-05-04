### Roster Details<br />
Team Name: RUSTEC<br />
Roster: anttzz, Brilliance, jakekeS, supra, youka<br />
Global Rank: [112](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [77]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  981.2<br />
<br />
Final Rank Value (981.2) = Starting Rank Value (863.7) + Head To Head Adjustments (117.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.252[<sup>2</sup>](#table1)
- LAN Wins: 0.117[<sup>2</sup>](#table1)

The average of these factors is 0.250<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 863.7
- 400 + ( ( 0.250 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 863.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      257 | 2026-04-26 | Phantom          | L   | 1.000      | -            | -                | -                | -         |   -13.38 | anttzz, Brilliance, jakekeS, supra, youka |
|           28 |      265 | 2026-04-26 | INOX Division    | W   | 1.000      | 0.303        | 0.030 (0.009)    | 0.622 (0.188)    | 0 (0.000) |    16.85 | anttzz, Brilliance, jakekeS, supra, youka |
|           27 |      272 | 2026-04-26 | BRUTE            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.47 | anttzz, Brilliance, jakekeS, supra, youka |
|           26 |      341 | 2026-04-25 | aimclub          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.90 | anttzz, Brilliance, jakekeS, supra, youka |
|           25 |      347 | 2026-04-25 | INOX Division    | L   | 1.000      | -            | -                | -                | -         |   -14.26 | anttzz, Brilliance, jakekeS, supra, youka |
|           24 |      366 | 2026-04-24 | ex-RUBY          | W   | 1.000      | 0.384        | 0.052 (0.020)    | 0.995 (0.382)    | 0 (0.000) |    21.29 | anttzz, Brilliance, jakekeS, supra, youka |
|           23 |      413 | 2026-04-23 | playersclub      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.24 | anttzz, Brilliance, jakekeS, supra, youka |
|           22 |      441 | 2026-04-22 | Hashiras         | L   | 1.000      | -            | -                | -                | -         |   -20.14 | anttzz, Brilliance, jakekeS, supra, youka |
|           21 |      467 | 2026-04-20 | Atreides         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.49 | anttzz, Brilliance, jakekeS, supra, youka |
|           20 |      491 | 2026-04-19 | EC BANGA         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.53 | anttzz, Brilliance, jakekeS, supra, youka |
|           19 |      721 | 2026-04-08 | Nemesis          | L   | 1.000      | -            | -                | -                | -         |    -3.61 | anttzz, Brilliance, jakekeS, supra, youka |
|           18 |      970 | 2026-04-03 | STATE            | W   | 0.994      | 0.435        | 0.015 (0.006)    | 0.641 (0.277)    | 0 (0.000) |    19.78 | anttzz, Brilliance, jakekeS, supra, youka |
|           17 |      987 | 2026-04-03 | yngods           | L   | 0.993      | -            | -                | -                | -         |   -21.21 | anttzz, Brilliance, jakekeS, supra, youka |
|           16 |     1076 | 2026-04-02 | ex-Zero Tenacity | W   | 0.987      | 0.384        | -                | 0.640 (0.243)    | -         |    12.22 | anttzz, Brilliance, jakekeS, supra, youka |
|           15 |     1160 | 2026-04-01 | MANA             | L   | 0.981      | -            | -                | -                | -         |   -13.38 | anttzz, Brilliance, jakekeS, supra, youka |
|           14 |     1175 | 2026-04-01 | ASTRAL           | W   | 0.980      | 0.435        | 0.012 (0.005)    | 0.777 (0.331)    | -         |    17.29 | anttzz, Brilliance, jakekeS, supra, youka |
|           13 |     1356 | 2026-03-30 | Rune Eaters      | W   | 0.966      | 0.384        | 0.003 (0.001)    | 0.449 (0.167)    | -         |     9.02 | anttzz, Brilliance, jakekeS, supra, youka |
|           12 |     1429 | 2026-03-29 | Nigel Mirage     | W   | 0.959      | -            | -                | -                | -         |     1.42 | anttzz, Brilliance, jakekeS, supra, youka |
|           11 |     1452 | 2026-03-29 | Metizport        | W   | 0.958      | 0.435        | 0.043 (0.018)    | 0.571 (0.238)    | -         |    21.62 | anttzz, Brilliance, jakekeS, supra, youka |
|           10 |     1488 | 2026-03-28 | MANA             | W   | 0.954      | 0.384        | 0.003 (0.001)    | 0.827 (0.303)    | -         |    19.30 | anttzz, Brilliance, jakekeS, supra, youka |
|            9 |     1696 | 2026-03-24 | Oxuji            | W   | 0.928      | 0.384        | 0.008 (0.003)    | 0.514 (0.183)    | -         |    19.35 | anttzz, Brilliance, jakekeS, supra, youka |
|            8 |     1773 | 2026-03-23 | Hashiras         | W   | 0.921      | 0.384        | -                | 0.582 (0.206)    | -         |    13.96 | anttzz, Brilliance, jakekeS, supra, youka |
|            7 |     2419 | 2026-03-10 | QUAZAR           | L   | 0.832      | -            | -                | -                | -         |   -19.98 | anttzz, Brilliance, jakekeS, supra, youka |
|            6 |     2427 | 2026-03-10 | Nemesis          | L   | 0.831      | -            | -                | -                | -         |    -2.25 | anttzz, Brilliance, jakekeS, supra, youka |
|            5 |     4071 | 2026-02-02 | SPARTA           | L   | 0.593      | -            | -                | -                | -         |    -2.24 | anttzz, Brilliance, jakekeS, supra, youka |
|            4 |     4081 | 2026-02-02 | K27              | L   | 0.593      | -            | -                | -                | -         |    -1.00 | anttzz, Brilliance, jakekeS, supra, youka |
|            3 |     4123 | 2026-01-31 | WW               | W   | 0.582      | 0.333        | 0.029 (0.006)    | -                | 1 (0.582) |    16.87 | anttzz, Brilliance, jakekeS, supra, youka |
|            2 |     4138 | 2026-01-31 | ARCRED           | L   | 0.580      | -            | -                | -                | -         |    -2.28 | anttzz, Brilliance, jakekeS, supra, youka |
|            1 |     4155 | 2026-01-31 | Virtus.pro       | W   | 0.578      | 0.333        | 0.008 (0.002)    | -                | 1 (0.578) |     2.65 | anttzz, Brilliance, jakekeS, supra, youka |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,000.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-26 |      1.000 | $3,000.00      | $3,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
