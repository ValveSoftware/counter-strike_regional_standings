### Roster Details<br />
Team Name: ex-Enterprise<br />
Roster: bajmi, Demho, ex1st, mwlky, Sobol<br />
Global Rank: [125](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [88]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  727.5<br />
<br />
Final Rank Value (727.5) = Starting Rank Value (718.9) + Head To Head Adjustments (8.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.135[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.9
- 400 + ( ( 0.167 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 718.9


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
|           17 |     1867 | 2024-10-26 | Illuminar   | W   | 0.393      | 0.303        | 0.007 (0.001)    | 0.350 (0.042)    | 1 (0.393) |     7.61 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           16 |     1887 | 2024-10-26 | Permitta    | W   | 0.391      | 0.303        | 0.027 (0.003)    | 0.424 (0.050)    | 1 (0.391) |     9.24 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           15 |     1891 | 2024-10-26 | Insomnia    | W   | 0.390      | 0.303        | 0.001 (0.000)    | 0.035 (0.004)    | 1 (0.390) |     4.58 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           14 |     2122 | 2024-10-13 | Passion UA  | L   | 0.305      | -            | -                | -                | -         |    -1.61 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           13 |     2141 | 2024-10-12 | Illuminar   | L   | 0.298      | -            | -                | -                | -         |    -3.60 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           12 |     2802 | 2024-09-24 | Rebels      | L   | 0.179      | -            | -                | -                | -         |    -2.76 | Demho, ex1st, mwlky, sk1tt, Sobol  |
|           11 |     2836 | 2024-09-23 | Permitta    | W   | 0.173      | 0.143        | 0.027 (0.001)    | 0.424 (0.010)    | 0 (0.000) |     4.21 | Demho, ex1st, mwlky, sk1tt, Sobol  |
|           10 |     2920 | 2024-09-20 | SovvyKiNG   | L   | 0.151      | -            | -                | -                | -         |    -3.57 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            9 |     3084 | 2024-09-15 | kONO        | L   | 0.117      | -            | -                | -                | -         |    -1.41 | bajmi, Demho, ex1st, mwlky, Sobol  |
|            8 |     3104 | 2024-09-14 | NAVI Junior | L   | 0.111      | -            | -                | -                | -         |    -0.72 | bajmi, Demho, ex1st, mwlky, Sobol  |
|            7 |     3146 | 2024-09-13 | HOTU        | L   | 0.104      | -            | -                | -                | -         |    -1.95 | bajmi, Demho, ex1st, m4tthi, Sobol |
|            6 |     3184 | 2024-09-12 | UNiTY       | W   | 0.097      | 0.333        | 0.026 (0.001)    | 0.261 (0.008)    | 0 (0.000) |     1.82 | bajmi, Demho, ex1st, mwlky, Sobol  |
|            5 |     3293 | 2024-09-07 | TNL         | L   | 0.066      | -            | -                | -                | -         |    -1.04 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            4 |     3305 | 2024-09-07 | Partizan    | L   | 0.065      | -            | -                | -                | -         |    -1.27 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            3 |     3437 | 2024-09-03 | HOTU        | L   | 0.039      | -            | -                | -                | -         |    -0.74 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            2 |     3454 | 2024-09-03 | Sampi       | L   | 0.037      | -            | -                | -                | -         |    -0.46 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            1 |     3532 | 2024-08-30 | GUN5        | W   | 0.011      | 0.384        | 0.097 (0.000)    | 0.893 (0.004)    | 0 (0.000) |     0.26 | bajmi, Demho, ex1st, fr3nd, Sobol  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,188.15)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-26 |      0.393 | $3,027.00      | $1,188.15       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
