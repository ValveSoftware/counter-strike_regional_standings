### Roster Details<br />
Team Name: Into the Breach<br />
Roster: hAdji, Keoz, REDSTAR, sinnopsyy, smooya<br />
Global Rank: [254](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [142]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  519.5<br />
<br />
Final Rank Value (519.5) = Starting Rank Value (510.3) + Head To Head Adjustments (9.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 510.3
- 400 + ( ( 0.061 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 510.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2748 | 2024-12-06 | Endpoint  | W   | 0.201      | 0.435        | 0.002 (0.000)    | 0.039 (0.003)    | 0 (0.000) |     4.12 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|            4 |     2828 | 2024-12-03 | Metizport | W   | 0.179      | 0.435        | 0.074 (0.006)    | 0.846 (0.066)    | 0 (0.000) |     5.17 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|            3 |     3372 | 2024-11-09 | ENCE      | L   | 0.020      | -            | -                | -                | -         |    -0.04 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            2 |     3394 | 2024-11-08 | ECLOT     | L   | 0.012      | -            | -                | -                | -         |    -0.02 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            1 |     3422 | 2024-11-06 | 9INE      | L   | 0.000      | -            | -                | -                | -         |    -0.01 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
