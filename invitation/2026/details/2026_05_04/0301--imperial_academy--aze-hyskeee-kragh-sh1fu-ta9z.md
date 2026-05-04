### Roster Details<br />
Team Name: Imperial Academy<br />
Roster: aZe, hyskeee, Kragh, sh1Fu, ta9z<br />
Global Rank: [301](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [185]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  552.7<br />
<br />
Final Rank Value (552.7) = Starting Rank Value (507.7) + Head To Head Adjustments (45.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.7
- 400 + ( ( 0.058 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 507.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      846 | 2026-04-05 | HEROIC Academy | L   | 1.000      | -            | -                | -                | -         |    -2.95 | aZe, hyskeee, Kragh, sh1Fu, ta9z |
|            4 |      931 | 2026-04-04 | Persona Grata  | W   | 0.998      | 0.371        | 0.000 (0.000)    | 0.472 (0.175)    | 0 (0.000) |    27.55 | aZe, hyskeee, Kragh, sh1Fu, ta9z |
|            3 |     1312 | 2026-03-31 | Hashiras       | L   | 0.971      | -            | -                | -                | -         |    -5.36 | aZe, hyskeee, Kragh, sh1Fu, ta9z |
|            2 |     1585 | 2026-03-27 | G2 Ares        | W   | 0.946      | 0.333        | 0.003 (0.001)    | 0.457 (0.144)    | 0 (0.000) |    27.70 | aZe, hyskeee, Kragh, sh1Fu, ta9z |
|            1 |     2445 | 2026-03-09 | HAVU           | L   | 0.828      | -            | -                | -                | -         |    -1.96 | aZe, hyskeee, Kragh, sh1Fu, ta9z |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
