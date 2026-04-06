### Roster Details<br />
Team Name: Sashi Academy<br />
Roster: Bl4zE, Damsi, Half, rosen, Thom<br />
Global Rank: [346](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [205]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  457.6<br />
<br />
Final Rank Value (457.6) = Starting Rank Value (448.9) + Head To Head Adjustments (8.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.025<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 448.9
- 400 + ( ( 0.025 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 448.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      264 | 2026-03-31 | BESTIA        | L   | 1.000      | -            | -                | -                | -         |    -0.20 | Bl4zE, Damsi, Half, rosen, Thom |
|            4 |      270 | 2026-03-31 | AaB           | L   | 1.000      | -            | -                | -                | -         |    -0.62 | Bl4zE, Damsi, Half, rosen, Thom |
|            3 |      277 | 2026-03-31 | Falcons Force | L   | 1.000      | -            | -                | -                | -         |    -3.31 | Bl4zE, Damsi, Half, rosen, Thom |
|            2 |      292 | 2026-03-31 | atputies      | W   | 1.000      | 0.340        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |    12.93 | Bl4zE, Damsi, Half, rosen, Thom |
|            1 |      299 | 2026-03-31 | 3DMAX         | L   | 1.000      | -            | -                | -                | -         |    -0.09 | Bl4zE, Damsi, Half, rosen, Thom |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
