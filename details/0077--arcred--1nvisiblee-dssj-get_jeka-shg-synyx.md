### Roster Details<br />
Team Name: ARCRED<br />
Roster: 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [77](../standings_global.md)<br />
Regional Rank: [54]( ../standings_europe.md)<br />
Final Rank Value:  985.4<br />
<br />
Final Rank Value (985.4) = Starting Rank Value (911.8) + Head To Head Adjustments (73.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.446[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.157[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.238<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 911.8
- 400 + ( ( 0.238 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 911.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |       46 | 2024-07-16 | Nemiga          | L   | 1.000      | -            | -                | -                | -         |    -5.99 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           21 |      323 | 2024-06-16 | RUBY            | L   | 0.993      | -            | -                | -                | -         |   -18.08 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           20 |      348 | 2024-06-15 | EYEBALLERS      | W   | 0.987      | 0.143        | 0.009 (0.001)    | 0.619 (0.087)    | 0 (0.000) |    11.79 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           19 |      364 | 2024-06-15 | VP.Prodigy      | W   | 0.986      | 0.450        | 0.039 (0.017)    | 0.498 (0.221)    | 0 (0.000) |    12.85 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           18 |      382 | 2024-06-14 | FAVBET          | W   | 0.981      | -            | -                | -                | 0 (0.000) |    11.73 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           17 |      437 | 2024-06-13 | CYBERSHOKE      | W   | 0.972      | 0.450        | 0.059 (0.026)    | 0.309 (0.135)    | 0 (0.000) |    11.72 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           16 |      492 | 2024-06-10 | Insilio         | L   | 0.955      | -            | -                | -                | -         |   -11.77 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           15 |      794 | 2024-06-05 | RUBY            | W   | 0.920      | 0.372        | 0.144 (0.049)    | 0.580 (0.199)    | 0 (0.000) |    15.36 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           14 |      869 | 2024-06-03 | DMS             | W   | 0.907      | 0.372        | 0.005 (0.002)    | 0.494 (0.167)    | 0 (0.000) |    16.83 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           13 |      918 | 2024-06-01 | Enterprise      | W   | 0.894      | 0.372        | 0.055 (0.018)    | 0.635 (0.211)    | 0 (0.000) |    15.61 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           12 |      974 | 2024-05-30 | FAVBET          | W   | 0.881      | 0.372        | 0.005 (0.002)    | 0.420 (0.138)    | 0 (0.000) |    10.97 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           11 |     1678 | 2024-05-05 | 9 Pandas        | L   | 0.711      | -            | -                | -                | -         |    -6.23 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|           10 |     1859 | 2024-04-26 | Insilio         | W   | 0.654      | 0.396        | 0.035 (0.009)    | 0.570 (0.148)    | 0 (0.000) |    12.50 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            9 |     1868 | 2024-04-26 | Permitta        | W   | 0.652      | 0.396        | 0.039 (0.010)    | 0.794 (0.205)    | 0 (0.000) |    12.71 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            8 |     2954 | 2024-03-12 | The Chosen Few  | L   | 0.354      | -            | -                | -                | -         |    -8.26 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            7 |     3011 | 2024-03-09 | FORZE YNG       | W   | 0.334      | -            | -                | -                | -         |     0.59 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            6 |     3037 | 2024-03-08 | RUBY            | L   | 0.327      | -            | -                | -                | -         |    -3.77 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            5 |     3125 | 2024-03-05 | 1WIN            | W   | 0.308      | 0.372        | 0.041 (0.005)    | 0.545 (0.062)    | -         |     5.50 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            4 |     3272 | 2024-02-27 | FORZE           | L   | 0.260      | -            | -                | -                | -         |    -3.37 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            3 |     3479 | 2024-02-18 | brazylijski luz | L   | 0.200      | -            | -                | -                | -         |    -3.78 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            2 |     3651 | 2024-02-11 | Sashi           | L   | 0.153      | -            | -                | -                | -         |    -0.98 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |
|            1 |     3739 | 2024-02-04 | Portugal        | L   | 0.106      | -            | -                | -                | -         |    -2.40 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,035.54)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.993 | $10,000.00     | $9,930.53       |
| 2024-06-10 |      0.955 | $4,300.00      | $4,105.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
