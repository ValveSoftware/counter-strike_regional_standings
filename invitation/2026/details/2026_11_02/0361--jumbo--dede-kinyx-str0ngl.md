### Roster Details<br />
Team Name: JUMBO<br />
Roster: DeDe, kinyx, str0ngl<br />
Global Rank: [361](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [236]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  434.8<br />
<br />
Final Rank Value (434.8) = Starting Rank Value (446.8) + Head To Head Adjustments (-12.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.025<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 446.8
- 400 + ( ( 0.025 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 446.8


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
|            5 |      572 | 2026-10-16 | Young TigeRES | L   | 1.000      | -            | -                | -                | -         |    -3.77 | DeDe, kinyx, mecry, str0ngl, yummy   |
|            4 |      607 | 2026-10-16 | d06eg         | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |    14.03 | DeDe, kinyx, mecry, str0ngl, yummy   |
|            3 |      614 | 2026-10-16 | VP.Future     | L   | 1.000      | -            | -                | -                | -         |    -4.79 | DeDe, kinyx, mecry, str0ngl, yummy   |
|            2 |     2327 | 2026-09-09 | Banda Chuya   | L   | 0.841      | -            | -                | -                | -         |   -15.21 | DeDe, kinyx, mecry, str0ngl, yummy   |
|            1 |     4938 | 2026-06-05 | Misa          | L   | 0.201      | -            | -                | -                | -         |    -2.32 | DeDe, kinyx, matusik, reNIK, str0ngl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
