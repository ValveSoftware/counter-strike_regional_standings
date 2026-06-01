### Roster Details<br />
Team Name: UR<br />
Roster: 0z, 4ever, drace, gLong, yoi<br />
Global Rank: [357](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [45]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  422.3<br />
<br />
Final Rank Value (422.3) = Starting Rank Value (400.7) + Head To Head Adjustments (21.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.7
- 400 + ( ( 0.000 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 400.7


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
|            8 |     1005 | 2026-05-01 | BORING PLAYERS    | L   | 0.992      | -            | -                | -                | -         |    -4.72 | 0z, 4ever, Doomer, drace, yoi     |
|            7 |     1054 | 2026-04-30 | JiJieHao          | L   | 0.985      | -            | -                | -                | -         |    -0.21 | 0z, 4ever, Doomer, drace, yoi     |
|            6 |     2094 | 2026-04-02 | TYLOO             | L   | 0.799      | -            | -                | -                | -         |    -0.09 | 0z, 4ever, drace, gLong, yoi      |
|            5 |     2207 | 2026-03-31 | FlyQuest          | L   | 0.790      | -            | -                | -                | -         |    -0.57 | 0z, 4ever, drace, gLong, yoi      |
|            4 |     2447 | 2026-03-29 | Nas               | W   | 0.771      | 0.320        | 0.000 (0.000)    | 0.059 (0.015)    | 0 (0.000) |    16.09 | 0z, 4ever, drace, gLong, yoi      |
|            3 |     2522 | 2026-03-28 | Chinggis Warriors | L   | 0.765      | -            | -                | -                | -         |    -0.45 | 0z, 4ever, drace, gLong, yoi      |
|            2 |     2528 | 2026-03-27 | Walk The Talk     | W   | 0.764      | 0.320        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    11.71 | 0z, 4ever, drace, gLong, yoi      |
|            1 |     5522 | 2026-01-18 | Rare Atom         | L   | 0.306      | -            | -                | -                | -         |    -0.20 | 4ever, drace, gLong, madness, yoi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
