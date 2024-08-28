### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, Boombl4, HeavyGod, ICY, interz<br />
Global Rank: [55](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [39]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  1012.1<br />
<br />
Final Rank Value (1012.1) = Starting Rank Value (815.8) + Head To Head Adjustments (196.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.406[<sup>1</sup>](#table2)
- Bounty Collected: 0.361[<sup>2</sup>](#table1)
- Opponent Network: 0.072[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.210<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 815.8
- 400 + ( ( 0.210 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 815.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |       63 | 2024-08-27 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -4.36 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           15 |      125 | 2024-08-26 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -1.18 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           14 |      141 | 2024-08-26 | HEROIC            | W   | 1.000      | 0.143        | 0.225 (0.032)    | 0.379 (0.054)    | 0 (0.000) |    28.08 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           13 |      234 | 2024-08-23 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -1.43 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           12 |      266 | 2024-08-22 | 9 Pandas          | W   | 1.000      | 0.143        | 0.070 (0.010)    | 0.715 (0.102)    | 0 (0.000) |    21.89 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           11 |      322 | 2024-08-21 | Passion UA        | W   | 1.000      | 0.143        | 0.170 (0.024)    | 1.000 (0.143)    | 0 (0.000) |    21.79 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           10 |      353 | 2024-08-21 | Johnny Speeds     | W   | 1.000      | 0.143        | 0.119 (0.017)    | 0.985 (0.141)    | 0 (0.000) |    23.32 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            9 |      388 | 2024-08-19 | 500               | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.087 (0.012)    | 0 (0.000) |     3.54 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            8 |      394 | 2024-08-19 | Ninjas in Pyjamas | W   | 1.000      | 0.143        | 0.245 (0.035)    | 0.443 (0.063)    | 0 (0.000) |    30.12 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            7 |      399 | 2024-08-19 | BLEED             | W   | 1.000      | 0.143        | 0.112 (0.016)    | 0.519 (0.074)    | 0 (0.000) |    25.59 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            6 |      887 | 2024-08-03 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -4.38 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            5 |      916 | 2024-08-02 | BLEED             | W   | 1.000      | 0.143        | 0.112 (0.016)    | 0.519 (0.074)    | 0 (0.000) |    28.36 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            4 |      957 | 2024-08-01 | AMKAL             | W   | 1.000      | 0.143        | 0.144 (0.021)    | 0.393 (0.056)    | 0 (0.000) |    27.10 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            3 |      970 | 2024-08-01 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -0.87 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            2 |     1002 | 2024-07-31 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -1.04 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            1 |     1026 | 2024-07-31 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -0.21 | Ax1Le, Boombl4, HeavyGod, ICY, interz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,000.00)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-25 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-08-04 |      1.000 | $5,000.00      | $5,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
