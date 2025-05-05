### Roster Details<br />
Team Name: Betera<br />
Roster: El1an, MaSvAl, OWNER, sh1nejezzz, tENZY<br />
Global Rank: [268](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [154]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  487.1<br />
<br />
Final Rank Value (487.1) = Starting Rank Value (486.5) + Head To Head Adjustments (0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.189[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.5
- 400 + ( ( 0.048 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 486.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2520 | 2024-12-19 | Monte            | L   | 0.287      | -            | -                | -                | -         |    -1.72 | El1an, MaSvAl, OWNER, sh1nejezzz, tENZY |
|            4 |     2567 | 2024-12-15 | FAVBET           | L   | 0.261      | -            | -                | -                | -         |    -2.06 | El1an, MaSvAl, OWNER, sh1nejezzz, supra |
|            3 |     2591 | 2024-12-14 | JiJieHao         | W   | 0.255      | 0.143        | 0.014 (0.001)    | 0.540 (0.020)    | 0 (0.000) |     7.61 | El1an, MaSvAl, OWNER, sh1nejezzz, supra |
|            2 |     2616 | 2024-12-13 | Fire Flux        | L   | 0.248      | -            | -                | -                | -         |    -1.33 | El1an, MaSvAl, OWNER, sh1nejezzz, supra |
|            1 |     2842 | 2024-12-02 | FLuffy Gangsters | L   | 0.174      | -            | -                | -                | -         |    -1.89 | El1an, MaSvAl, OWNER, sh1nejezzz, tENZY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
