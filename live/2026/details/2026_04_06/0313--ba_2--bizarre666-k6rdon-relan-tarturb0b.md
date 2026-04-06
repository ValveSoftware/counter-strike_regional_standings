### Roster Details<br />
Team Name: BA 2<br />
Roster: Bizarre666, k6rdon, relan, tarturb0b<br />
Global Rank: [313](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [192]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  526.9<br />
<br />
Final Rank Value (526.9) = Starting Rank Value (500.7) + Head To Head Adjustments (26.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.7
- 400 + ( ( 0.051 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 500.7


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
|            5 |      122 | 2026-04-02 | Fisher College | L   | 1.000      | -            | -                | -                | -         |    -2.80 | Bizarre666, k6rdon, relan, tarturb0b, tw1nkl3 |
|            4 |      177 | 2026-04-01 | Outfit 49      | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.311 (0.044)    | 0 (0.000) |    23.19 | Bizarre666, k6rdon, relan, tarturb0b, tw1nkl3 |
|            3 |      233 | 2026-03-31 | LAG            | L   | 1.000      | -            | -                | -                | -         |    -2.39 | Bizarre666, k6rdon, relan, tarturb0b, tw1nkl3 |
|            2 |      545 | 2026-03-25 | AVANT          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    11.09 | Bizarre666, k6rdon, kodua, relan, tarturb0b   |
|            1 |     1107 | 2026-03-14 | Fisher College | L   | 1.000      | -            | -                | -                | -         |    -2.83 | 6SIX, Bizarre666, k6rdon, relan, tarturb0b    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
