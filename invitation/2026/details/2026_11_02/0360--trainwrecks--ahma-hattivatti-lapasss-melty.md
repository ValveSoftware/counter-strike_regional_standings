### Roster Details<br />
Team Name: Trainwrecks<br />
Roster: AhMa, Hattivatti, LapaSSS, melty<br />
Global Rank: [360](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [235]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  438.1<br />
<br />
Final Rank Value (438.1) = Starting Rank Value (427.8) + Head To Head Adjustments (10.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.057[<sup>2</sup>](#table1)

The average of these factors is 0.015<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 427.8
- 400 + ( ( 0.015 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 427.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3726 | 2026-07-31 | BC.Game     | L   | 0.573      | -            | -                | -                | -         |    -0.10 | AhMa, Hattivatti, LapaSSS, melty, Samppa |
|            4 |     3731 | 2026-07-31 | ROUNDS      | W   | 0.573      | 0.362        | 0.000 (0.000)    | 0.104 (0.022)    | 1 (0.573) |    11.67 | AhMa, Hattivatti, LapaSSS, melty, Samppa |
|            3 |     3743 | 2026-07-31 | HAVU        | L   | 0.571      | -            | -                | -                | -         |    -0.42 | AhMa, Hattivatti, LapaSSS, melty, Samppa |
|            2 |     5391 | 2026-05-23 | antidaun    | L   | 0.112      | -            | -                | -                | -         |    -0.83 | AhMa, Hattivatti, Lapa, LapaSSS, melty   |
|            1 |     5411 | 2026-05-23 | 100 Thieves | L   | 0.111      | -            | -                | -                | -         |    -0.01 | AhMa, Hattivatti, Lapa, LapaSSS, melty   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
