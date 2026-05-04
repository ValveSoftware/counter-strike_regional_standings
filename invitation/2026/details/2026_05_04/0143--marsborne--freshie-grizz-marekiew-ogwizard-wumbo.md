### Roster Details<br />
Team Name: Marsborne<br />
Roster: freshie, Grizz, marekiew, ogwizard, WUMBO<br />
Global Rank: [143](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_05_04.md)<br />
Regional Rank: [29]( ../../standings_americas_2026_05_04.md)<br />
<br />
Final Rank Value:  892.5<br />
<br />
Final Rank Value (892.5) = Starting Rank Value (842.8) + Head To Head Adjustments (49.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.284[<sup>1</sup>](#table2)
- Bounty Collected: 0.311[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.304[<sup>2</sup>](#table1)

The average of these factors is 0.239<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 842.8
- 400 + ( ( 0.239 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 842.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      241 | 2026-04-26 | Passion UA     | L   | 1.000      | -            | -                | -                | -         |    -3.00 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            5 |      254 | 2026-04-26 | Fisher College | L   | 1.000      | -            | -                | -                | -         |    -6.88 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            4 |      290 | 2026-04-25 | M80            | W   | 1.000      | 0.371        | 0.081 (0.030)    | 0.640 (0.237)    | 1 (1.000) |    29.96 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            3 |      294 | 2026-04-25 | Voca           | W   | 1.000      | 0.371        | 0.085 (0.031)    | 0.832 (0.308)    | 1 (1.000) |    28.71 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            2 |      304 | 2026-04-25 | FRZ            | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.033 (0.012)    | 1 (1.000) |     3.15 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            1 |      313 | 2026-04-25 | Voca           | L   | 1.000      | -            | -                | -                | -         |    -2.27 | freshie, Grizz, marekiew, ogwizard, WUMBO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,400.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-26 |      1.000 | $1,400.00      | $1,400.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
