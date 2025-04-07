### Roster Details<br />
Team Name: moneyF<br />
Roster: bevve, Juve, Keoz, REDSTAR, reiko<br />
Global Rank: [205](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [124]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  600.7<br />
<br />
Final Rank Value (600.7) = Starting Rank Value (542.5) + Head To Head Adjustments (58.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.054[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.077<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 542.5
- 400 + ( ( 0.077 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 542.5


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
|           10 |     1457 | 2025-02-07 | Sashi          | L   | 0.806      | -            | -                | -                | -         |    -4.60 | bevve, Juve, Keoz, REDSTAR, reiko       |
|            9 |     1509 | 2025-02-05 | 500            | L   | 0.794      | -            | -                | -                | -         |    -2.73 | bevve, Juve, Keoz, REDSTAR, reiko       |
|            8 |     1544 | 2025-02-03 | Spirit Academy | L   | 0.781      | -            | -                | -                | -         |    -4.19 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            7 |     1569 | 2025-02-01 | Monte          | W   | 0.768      | 0.435        | 0.012 (0.004)    | 0.768 (0.256)    | 0 (0.000) |    19.52 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            6 |     1593 | 2025-01-29 | CPH Wolves     | W   | 0.747      | 0.143        | 0.006 (0.001)    | 0.453 (0.048)    | 0 (0.000) |    16.71 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            5 |     1604 | 2025-01-28 | Zero Tenacity  | W   | 0.739      | 0.143        | 0.021 (0.002)    | 0.646 (0.068)    | 0 (0.000) |    18.86 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            4 |     1606 | 2025-01-27 | AMKAL          | L   | 0.735      | -            | -                | -                | -         |    -5.67 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            3 |     1610 | 2025-01-26 | Adventurers    | W   | 0.728      | 0.143        | 0.001 (0.000)    | 0.023 (0.002)    | 0 (0.000) |    13.94 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            2 |     1870 | 2024-12-13 | AMKAL          | L   | 0.434      | -            | -                | -                | -         |    -4.52 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            1 |     1935 | 2024-12-08 | 9INE           | W   | 0.401      | 0.435        | 0.030 (0.005)    | 0.937 (0.163)    | 0 (0.000) |    10.87 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
