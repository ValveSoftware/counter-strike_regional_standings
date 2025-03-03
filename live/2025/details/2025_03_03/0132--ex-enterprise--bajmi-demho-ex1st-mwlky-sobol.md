### Roster Details<br />
Team Name: ex-Enterprise<br />
Roster: bajmi, Demho, ex1st, mwlky, Sobol<br />
Global Rank: [132](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [89]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  722.1<br />
<br />
Final Rank Value (722.1) = Starting Rank Value (711.4) + Head To Head Adjustments (10.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.122[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 711.4
- 400 + ( ( 0.162 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 711.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1955 | 2024-10-26 | Illuminar   | W   | 0.347      | 0.303        | 0.007 (0.001)    | 0.311 (0.033)    | 1 (0.347) |     6.64 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           13 |     1975 | 2024-10-26 | Permitta    | W   | 0.345      | 0.303        | 0.027 (0.003)    | 0.364 (0.038)    | 1 (0.345) |     8.11 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           12 |     1979 | 2024-10-26 | Insomnia    | W   | 0.345      | 0.303        | 0.001 (0.000)    | 0.030 (0.003)    | 1 (0.345) |     4.08 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           11 |     2210 | 2024-10-13 | Passion UA  | L   | 0.260      | -            | -                | -                | -         |    -1.39 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           10 |     2229 | 2024-10-12 | Illuminar   | L   | 0.253      | -            | -                | -                | -         |    -3.13 | bajmi, Demho, ex1st, mwlky, Sobol  |
|            9 |     2890 | 2024-09-24 | Rebels      | L   | 0.133      | -            | -                | -                | -         |    -2.08 | Demho, ex1st, mwlky, sk1tt, Sobol  |
|            8 |     2924 | 2024-09-23 | Permitta    | W   | 0.127      | 0.143        | 0.027 (0.000)    | 0.364 (0.007)    | 0 (0.000) |     3.06 | Demho, ex1st, mwlky, sk1tt, Sobol  |
|            7 |     3008 | 2024-09-20 | SovvyKiNG   | L   | 0.106      | -            | -                | -                | -         |    -2.50 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            6 |     3172 | 2024-09-15 | kONO        | L   | 0.072      | -            | -                | -                | -         |    -0.86 | bajmi, Demho, ex1st, mwlky, Sobol  |
|            5 |     3192 | 2024-09-14 | NAVI Junior | L   | 0.066      | -            | -                | -                | -         |    -0.42 | bajmi, Demho, ex1st, mwlky, Sobol  |
|            4 |     3234 | 2024-09-13 | HOTU        | L   | 0.059      | -            | -                | -                | -         |    -1.08 | bajmi, Demho, ex1st, m4tthi, Sobol |
|            3 |     3272 | 2024-09-12 | UNiTY       | W   | 0.051      | 0.333        | 0.026 (0.000)    | 0.238 (0.004)    | 0 (0.000) |     0.96 | bajmi, Demho, ex1st, mwlky, Sobol  |
|            2 |     3381 | 2024-09-07 | TNL         | L   | 0.021      | -            | -                | -                | -         |    -0.32 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            1 |     3393 | 2024-09-07 | Partizan    | L   | 0.020      | -            | -                | -                | -         |    -0.38 | bajmi, Demho, ex1st, fr3nd, Sobol  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,051.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-26 |      0.347 | $3,027.00      | $1,051.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
