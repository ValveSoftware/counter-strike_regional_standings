### Roster Details<br />
Team Name: Vantage<br />
Roster: Drox, Jynx, Mingovi, Snaaz, supar<br />
Global Rank: [238](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [32]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  537.5<br />
<br />
Final Rank Value (537.5) = Starting Rank Value (507.3) + Head To Head Adjustments (30.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.3
- 400 + ( ( 0.058 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 507.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      189 | 2025-03-28 | MANTRA        | L   | 1.000      | -            | -                | -                | -         |   -14.22 | Drox, Jynx, Mingovi, supar, swerzieN |
|            9 |      247 | 2025-03-28 | SemperFi      | L   | 1.000      | -            | -                | -                | -         |    -2.65 | Drox, Jynx, Mingovi, Snaaz, supar    |
|            8 |      318 | 2025-03-27 | Only One Word | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.154 (0.022)    | 0 (0.000) |    18.25 | Drox, Jynx, Mingovi, supar, swerzieN |
|            7 |      397 | 2025-03-21 | Mindfreak     | L   | 1.000      | -            | -                | -                | -         |   -11.48 | Drox, Jynx, Mingovi, supar, swerzieN |
|            6 |      400 | 2025-03-20 | ex-TALON      | L   | 1.000      | -            | -                | -                | -         |    -3.72 | Drox, Jynx, Mingovi, supar, swerzieN |
|            5 |      983 | 2025-02-25 | Only One Word | L   | 0.931      | -            | -                | -                | -         |   -12.44 | Drox, Jynx, Mingovi, supar, swerzieN |
|            4 |      999 | 2025-02-24 | ex-TALON      | L   | 0.924      | -            | -                | -                | -         |    -3.80 | Drox, Jynx, Mingovi, supar, swerzieN |
|            3 |     1026 | 2025-02-23 | Rooster       | W   | 0.916      | 0.143        | 0.007 (0.001)    | 0.402 (0.053)    | 0 (0.000) |    23.70 | Drox, Jynx, Mingovi, supar, swerzieN |
|            2 |     1207 | 2025-02-14 | Housebets     | W   | 0.858      | 0.143        | 0.015 (0.002)    | 0.254 (0.031)    | 0 (0.000) |    20.65 | Drox, Jynx, Mingovi, supar, swerzieN |
|            1 |     1210 | 2025-02-14 | MANTRA        | W   | 0.856      | 0.143        | 0.000 (0.000)    | 0.204 (0.025)    | 0 (0.000) |    15.95 | Drox, Jynx, Mingovi, supar, swerzieN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
