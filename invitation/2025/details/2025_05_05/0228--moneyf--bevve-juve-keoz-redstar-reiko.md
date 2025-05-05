### Roster Details<br />
Team Name: moneyF<br />
Roster: bevve, Juve, Keoz, REDSTAR, reiko<br />
Global Rank: [228](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [129]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  550.9<br />
<br />
Final Rank Value (550.9) = Starting Rank Value (511.6) + Head To Head Adjustments (39.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 511.6
- 400 + ( ( 0.062 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 511.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2143 | 2025-02-07 | Sashi          | L   | 0.619      | -            | -                | -                | -         |    -2.31 | bevve, Juve, Keoz, REDSTAR, reiko       |
|            9 |     2195 | 2025-02-05 | 500            | L   | 0.607      | -            | -                | -                | -         |    -2.03 | bevve, Juve, Keoz, REDSTAR, reiko       |
|            8 |     2230 | 2025-02-03 | Spirit Academy | L   | 0.595      | -            | -                | -                | -         |    -2.91 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            7 |     2255 | 2025-02-01 | Monte          | W   | 0.581      | 0.435        | 0.005 (0.001)    | 0.162 (0.041)    | 0 (0.000) |    13.84 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            6 |     2279 | 2025-01-29 | CPH Wolves     | W   | 0.560      | 0.143        | 0.003 (0.000)    | 0.300 (0.024)    | 0 (0.000) |    12.50 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            5 |     2292 | 2025-01-28 | Zero Tenacity  | W   | 0.552      | 0.143        | 0.008 (0.001)    | 0.439 (0.035)    | 0 (0.000) |    13.65 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            4 |     2300 | 2025-01-27 | AMKAL          | L   | 0.548      | -            | -                | -                | -         |    -4.60 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            3 |     2310 | 2025-01-26 | Adventurers    | W   | 0.541      | 0.143        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     7.66 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            2 |     2622 | 2024-12-13 | AMKAL          | L   | 0.247      | -            | -                | -                | -         |    -2.64 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            1 |     2687 | 2024-12-08 | 9INE           | W   | 0.214      | 0.435        | 0.023 (0.002)    | 0.752 (0.070)    | 0 (0.000) |     6.10 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
