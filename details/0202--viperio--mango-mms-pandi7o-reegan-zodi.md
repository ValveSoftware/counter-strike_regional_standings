### Roster Details<br />
Team Name: Viperio<br />
Roster: mAnGo, MMS, pandi7o, ReegaN, zodi<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [202](../standings_global.md)<br />
Regional Rank: [122]( ../standings_europe.md)<br />
Final Rank Value:  518.5<br />
<br />
Final Rank Value (518.5) = Starting Rank Value (514.9) + Head To Head Adjustments (3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.9
- 400 + ( ( 0.057 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 514.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2852 | 2024-03-05 | Alliance        | L   | 0.500      | -            | -                | -                | -         |    -1.71 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            9 |     2934 | 2024-03-01 | ECLOT           | L   | 0.474      | -            | -                | -                | -         |    -0.30 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            8 |     3170 | 2024-02-19 | NAVI Junior     | L   | 0.400      | -            | -                | -                | -         |    -3.32 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            7 |     3647 | 2024-01-24 | PERA            | L   | 0.230      | -            | -                | -                | -         |    -0.50 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            6 |     3671 | 2024-01-23 | Rebels          | W   | 0.222      | 0.143        | 0.054 (0.002)    | 0.450 (0.014)    | 0 (0.000) |     6.73 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            5 |     3674 | 2024-01-23 | Sampi           | W   | 0.222      | 0.143        | 0.045 (0.001)    | 0.837 (0.027)    | 0 (0.000) |     6.42 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            4 |     3693 | 2024-01-22 | ALTERNATE aTTaX | L   | 0.216      | -            | -                | -                | -         |    -0.31 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            3 |     3696 | 2024-01-22 | ex-Guild Eagles | L   | 0.216      | -            | -                | -                | -         |    -0.59 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            2 |     3702 | 2024-01-22 | PERA            | L   | 0.215      | -            | -                | -                | -         |    -0.46 | mAnGo, MMS, pandi7o, ReegaN, zodi |
|            1 |     4188 | 2024-01-10 | 00NATION        | L   | 0.137      | -            | -                | -                | -         |    -2.36 | mAnGo, MMS, pandi7o, ReegaN, zodi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
