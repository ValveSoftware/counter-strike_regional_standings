### Roster Details<br />
Team Name: BA 2<br />
Roster: Bizarre666, k6rdon, relan, tarturb0b<br />
Global Rank: [316](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [198]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  530.2<br />
<br />
Final Rank Value (530.2) = Starting Rank Value (506.2) + Head To Head Adjustments (24.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.2
- 400 + ( ( 0.056 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 506.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2028 | 2026-04-02 | Fisher College | L   | 0.802      | -            | -                | -                | -         |    -1.05 | Bizarre666, k6rdon, relan, tarturb0b, tw1nkl3 |
|            4 |     2125 | 2026-04-01 | 900FPSvsECO    | W   | 0.796      | 0.769        | 0.003 (0.002)    | 0.196 (0.120)    | 0 (0.000) |    18.32 | Bizarre666, k6rdon, relan, tarturb0b, tw1nkl3 |
|            3 |     2208 | 2026-03-31 | LAG            | L   | 0.790      | -            | -                | -                | -         |    -0.86 | Bizarre666, k6rdon, relan, tarturb0b, tw1nkl3 |
|            2 |     2616 | 2026-03-25 | AVANT          | W   | 0.750      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.23 | Bizarre666, k6rdon, kodua, relan, tarturb0b   |
|            1 |     3189 | 2026-03-14 | Fisher College | L   | 0.676      | -            | -                | -                | -         |    -0.61 | 6SIX, Bizarre666, k6rdon, relan, tarturb0b    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
