### Roster Details<br />
Team Name: New Legends<br />
Roster: AGB, Electrician, frog, TheJelly, tmk<br />
Global Rank: [349](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_11_02.md)<br />
Regional Rank: [76]( ../../standings_americas_2026_11_02.md)<br />
<br />
Final Rank Value:  465.0<br />
<br />
Final Rank Value (465.0) = Starting Rank Value (498.4) + Head To Head Adjustments (-33.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.4
- 400 + ( ( 0.053 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 498.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      892 | 2026-10-08 | Wanted Goons     | L   | 1.000      | -            | -                | -                | -         |   -11.29 | Electrician, frog, malfik, supa, TheJelly |
|            6 |      951 | 2026-10-07 | regain           | L   | 1.000      | -            | -                | -                | -         |    -4.74 | Electrician, frog, malfik, supa, TheJelly |
|            5 |     1659 | 2026-09-23 | Unreal Nightmare | L   | 0.936      | -            | -                | -                | -         |   -17.11 | AGB, Electrician, frog, TheJelly, tmk     |
|            4 |     1737 | 2026-09-22 | Villainous       | L   | 0.929      | -            | -                | -                | -         |    -8.49 | AGB, Electrician, frog, TheJelly, tmk     |
|            3 |     2906 | 2026-08-27 | EMPIRE           | L   | 0.756      | -            | -                | -                | -         |    -7.36 | AGB, Electrician, frog, TheJelly, tmk     |
|            2 |     2948 | 2026-08-26 | Club 333         | W   | 0.749      | 0.363        | 0.005 (0.001)    | 0.119 (0.032)    | 0 (0.000) |    16.36 | AGB, Electrician, frog, TheJelly, tmk     |
|            1 |     3003 | 2026-08-25 | Voca             | L   | 0.743      | -            | -                | -                | -         |    -0.74 | AGB, Electrician, frog, TheJelly, tmk     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
