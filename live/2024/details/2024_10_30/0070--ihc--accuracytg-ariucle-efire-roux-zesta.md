### Roster Details<br />
Team Name: IHC<br />
Roster: AccuracyTG, ariucle, Efire, ROUX, Zesta<br />
Global Rank: [70](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_30.md)<br />
Regional Rank: [4]( ../../standings_asia_2024_10_30.md)<br />
<br />
Final Rank Value:  994.2<br />
<br />
Final Rank Value (994.2) = Starting Rank Value (1035.8) + Head To Head Adjustments (-41.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.415[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.558[<sup>2</sup>](#table1)

The average of these factors is 0.321<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1035.8
- 400 + ( ( 0.321 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1035.8


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
|           16 |      230 | 2024-10-18 | Bromo             | L   | 1.000      | -            | -                | -                | -         |   -29.00 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|           15 |      237 | 2024-10-18 | ATOX              | W   | 1.000      | 0.333        | 0.038 (0.013)    | 0.270 (0.090)    | 1 (1.000) |    17.41 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|           14 |      285 | 2024-10-16 | GR                | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.116 (0.017)    | 0 (0.000) |     4.81 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|           13 |      291 | 2024-10-16 | ATOX              | W   | 1.000      | 0.333        | 0.038 (0.013)    | 0.270 (0.090)    | 1 (1.000) |    18.79 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|           12 |      310 | 2024-10-15 | ATOX              | L   | 1.000      | -            | -                | -                | -         |   -12.45 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|           11 |      313 | 2024-10-15 | Clutch            | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.069 (0.023)    | 1 (1.000) |     2.06 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|           10 |      573 | 2024-10-04 | ATOX              | L   | 1.000      | -            | -                | -                | -         |   -13.57 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|            9 |      823 | 2024-09-27 | Chinggis Warriors | W   | 0.979      | 0.143        | 0.011 (0.002)    | 0.125 (0.018)    | 1 (0.979) |     8.43 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|            8 |      833 | 2024-09-26 | The Huns          | W   | 0.977      | 0.143        | 0.008 (0.001)    | 0.034 (0.005)    | 1 (0.977) |     4.00 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|            7 |     1738 | 2024-08-29 | ATOX              | L   | 0.784      | -            | -                | -                | -         |   -10.36 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|            6 |     1780 | 2024-08-28 | Glamour           | W   | 0.778      | 0.143        | 0.000 (0.000)    | 0.053 (0.006)    | 0 (0.000) |     0.91 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|            5 |     1801 | 2024-08-28 | THE               | L   | 0.777      | -            | -                | -                | -         |   -22.86 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|            4 |     1923 | 2024-08-26 | THE               | W   | 0.765      | 0.143        | 0.000 (0.000)    | 0.079 (0.009)    | 0 (0.000) |     1.47 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|            3 |     1932 | 2024-08-26 | NomadS            | W   | 0.764      | 0.143        | 0.000 (0.000)    | 0.039 (0.004)    | 0 (0.000) |     1.33 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|            2 |     1936 | 2024-08-26 | ARAVT             | W   | 0.764      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.71 | AccuracyTG, ariucle, Efire, ROUX, Zesta     |
|            1 |     2943 | 2024-07-26 | Rare Atom         | L   | 0.559      | -            | -                | -                | -         |   -13.29 | AccuracyTG, ariucle, Efire, ROUX, Wonderzce |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,500.00)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-18 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-10-18 |      1.000 | $7,500.00      | $7,500.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
