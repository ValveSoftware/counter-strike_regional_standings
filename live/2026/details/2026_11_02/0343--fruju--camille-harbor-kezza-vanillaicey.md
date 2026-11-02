### Roster Details<br />
Team Name: Fruju<br />
Roster: camille, Harbor, Kezza, vanillaicey<br />
Global Rank: [343](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_11_02.md)<br />
Regional Rank: [43]( ../../standings_asia_2026_11_02.md)<br />
<br />
Final Rank Value:  491.1<br />
<br />
Final Rank Value (491.1) = Starting Rank Value (501.3) + Head To Head Adjustments (-10.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.3
- 400 + ( ( 0.054 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 501.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      727 | 2026-10-13 | Rooster      | L   | 1.000      | -            | -                | -                | -         |    -4.50 | camille, ElephanT, Harbor, Kezza, vanillaicey |
|            4 |      751 | 2026-10-12 | MARKandLARRY | L   | 1.000      | -            | -                | -                | -         |   -10.61 | camille, Harbor, Kezza, PearL, vanillaicey    |
|            3 |      837 | 2026-10-10 | Rooster      | W   | 1.000      | 0.278        | 0.006 (0.002)    | 0.261 (0.072)    | 0 (0.000) |    27.13 | camille, Harbor, Kezza, PearL, vanillaicey    |
|            2 |     1651 | 2026-09-24 | LFO 8        | L   | 0.938      | -            | -                | -                | -         |   -10.24 | camille, Harbor, Kezza, PearL, vanillaicey    |
|            1 |     1798 | 2026-09-22 | ex-Arcade    | L   | 0.925      | -            | -                | -                | -         |   -11.95 | camille, Harbor, Kezza, PearL, vanillaicey    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
