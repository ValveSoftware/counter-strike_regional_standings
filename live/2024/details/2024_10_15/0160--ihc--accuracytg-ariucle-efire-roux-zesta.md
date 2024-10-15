### Roster Details<br />
Team Name: IHC<br />
Roster: AccuracyTG, ariucle, Efire, ROUX, Zesta<br />
Global Rank: [160](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_15.md)<br />
Regional Rank: [14]( ../../standings_asia_2024_10_15.md)<br />
<br />
Final Rank Value:  679.9<br />
<br />
Final Rank Value (679.9) = Starting Rank Value (663.3) + Head To Head Adjustments (16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.331[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 663.3
- 400 + ( ( 0.136 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 663.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |        2 | 2024-10-15 | ATOX              | L   | 1.000      | -            | -                | -                | -         |    -6.63 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|           13 |        5 | 2024-10-15 | Clutch            | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.034 (0.011)    | 1 (1.000) |     6.96 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|           12 |      265 | 2024-10-04 | ATOX              | L   | 1.000      | -            | -                | -                | -         |    -6.95 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|           11 |      515 | 2024-09-27 | Chinggis Warriors | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.147 (0.021)    | 1 (1.000) |    21.66 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|           10 |      525 | 2024-09-26 | The Huns          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     5.79 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|            9 |     1430 | 2024-08-29 | ATOX              | L   | 0.885      | -            | -                | -                | -         |    -5.41 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|            8 |     1472 | 2024-08-28 | Glamour           | W   | 0.879      | 0.143        | 0.000 (0.000)    | 0.058 (0.007)    | 0 (0.000) |     5.79 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|            7 |     1493 | 2024-08-28 | THE               | L   | 0.878      | -            | -                | -                | -         |   -19.45 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|            6 |     1615 | 2024-08-26 | THE               | W   | 0.865      | 0.143        | 0.000 (0.000)    | 0.088 (0.011)    | 0 (0.000) |     7.83 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|            5 |     1624 | 2024-08-26 | NomadS            | W   | 0.865      | 0.143        | 0.000 (0.000)    | 0.045 (0.006)    | 0 (0.000) |     7.97 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|            4 |     1628 | 2024-08-26 | ARAVT             | W   | 0.865      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.11 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|            3 |     2635 | 2024-07-26 | Rare Atom         | L   | 0.659      | -            | -                | -                | -         |    -5.83 | AccuracyTG, ariucle, Efire, ROUX, Wonderzce |
|            2 |     4686 | 2024-05-03 | Chinggis Warriors | L   | 0.100      | -            | -                | -                | -         |    -0.83 | AccuracyTG, ariucle, Efire, ROUX, Wonderzce |
|            1 |     4693 | 2024-05-03 | The Huns          | W   | 0.099      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.099) |     0.58 | AccuracyTG, ariucle, Efire, ROUX, Wonderzce |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
