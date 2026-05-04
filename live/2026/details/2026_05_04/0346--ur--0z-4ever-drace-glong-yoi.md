### Roster Details<br />
Team Name: UR<br />
Roster: 0z, 4ever, drace, gLong, yoi<br />
Global Rank: [346](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_05_04.md)<br />
Regional Rank: [49]( ../../standings_asia_2026_05_04.md)<br />
<br />
Final Rank Value:  427.8<br />
<br />
Final Rank Value (427.8) = Starting Rank Value (400.9) + Head To Head Adjustments (26.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.9
- 400 + ( ( 0.001 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 400.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |       72 | 2026-05-01 | BORING PLAYERS    | L   | 1.000      | -            | -                | -                | -         |    -4.96 | 0z, 4ever, Doomer, drace, yoi     |
|            8 |      110 | 2026-04-30 | JiJieHao          | L   | 1.000      | -            | -                | -                | -         |    -0.41 | 0z, 4ever, Doomer, drace, yoi     |
|            7 |     1108 | 2026-04-02 | TYLOO             | L   | 0.986      | -            | -                | -                | -         |    -0.13 | 0z, 4ever, drace, gLong, yoi      |
|            6 |     1221 | 2026-03-31 | FlyQuest          | L   | 0.977      | -            | -                | -                | -         |    -0.57 | 0z, 4ever, drace, gLong, yoi      |
|            5 |     1461 | 2026-03-29 | Nas               | W   | 0.958      | 0.320        | 0.000 (0.000)    | 0.066 (0.020)    | 0 (0.000) |    19.45 | 0z, 4ever, drace, gLong, yoi      |
|            4 |     1536 | 2026-03-28 | Chinggis Warriors | L   | 0.952      | -            | -                | -                | -         |    -0.64 | 0z, 4ever, drace, gLong, yoi      |
|            3 |     1542 | 2026-03-27 | Walk The Talk     | W   | 0.950      | 0.320        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    14.36 | 0z, 4ever, drace, gLong, yoi      |
|            2 |     4536 | 2026-01-18 | Rare Atom         | L   | 0.492      | -            | -                | -                | -         |    -0.22 | 4ever, drace, gLong, madness, yoi |
|            1 |     5981 | 2025-11-07 | BORING PLAYERS    | L   | 0.011      | -            | -                | -                | -         |    -0.04 | 4ever, drace, gLong, madness, yoi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
