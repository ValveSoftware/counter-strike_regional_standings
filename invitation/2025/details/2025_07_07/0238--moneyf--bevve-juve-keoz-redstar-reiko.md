### Roster Details<br />
Team Name: moneyF<br />
Roster: bevve, Juve, Keoz, REDSTAR, reiko<br />
Global Rank: [238](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [125]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  501.3<br />
<br />
Final Rank Value (501.3) = Starting Rank Value (491.0) + Head To Head Adjustments (10.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 491.0
- 400 + ( ( 0.049 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 491.0


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
|            8 |     3584 | 2025-02-07 | Sashi          | L   | 0.199      | -            | -                | -                | -         |    -0.27 | bevve, Juve, Keoz, REDSTAR, reiko       |
|            7 |     3636 | 2025-02-05 | 500            | L   | 0.187      | -            | -                | -                | -         |    -0.71 | bevve, Juve, Keoz, REDSTAR, reiko       |
|            6 |     3673 | 2025-02-03 | Spirit Academy | L   | 0.174      | -            | -                | -                | -         |    -0.19 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            5 |     3698 | 2025-02-01 | Monte          | W   | 0.160      | 0.435        | 0.004 (0.000)    | 0.049 (0.003)    | 0 (0.000) |     3.81 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            4 |     3724 | 2025-01-29 | CPH Wolves     | W   | 0.140      | 0.143        | 0.005 (0.000)    | 0.126 (0.003)    | 0 (0.000) |     3.29 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            3 |     3762 | 2025-01-28 | Zero Tenacity  | W   | 0.132      | 0.143        | 0.014 (0.000)    | 0.839 (0.016)    | 0 (0.000) |     3.78 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            2 |     3785 | 2025-01-27 | AMKAL          | L   | 0.128      | -            | -                | -                | -         |    -0.87 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |
|            1 |     3798 | 2025-01-26 | Adventurers    | W   | 0.121      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.43 | Keoz, REDSTAR, reiko, sinnopsyy, smooya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
