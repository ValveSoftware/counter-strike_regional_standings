### Roster Details<br />
Team Name: adalYamigos<br />
Roster: bsd, ckzao, delboNi, f4stzin, SHOOWTiME<br />
Global Rank: [172](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [50]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  626.6<br />
<br />
Final Rank Value (626.6) = Starting Rank Value (627.5) + Head To Head Adjustments (-0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.243[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 627.5
- 400 + ( ( 0.120 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 627.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     3010 | 2025-03-11 | ShindeN         | L   | 0.229      | -            | -                | -                | -         |    -3.00 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME    |
|           12 |     3049 | 2025-03-10 | Sharks          | W   | 0.221      | 0.371        | 0.053 (0.004)    | 0.669 (0.055)    | 0 (0.000) |     5.91 | ckzao, delboNi, f4stzin, fREQ, SHOOWTiME   |
|           11 |     3090 | 2025-03-09 | Elevate         | W   | 0.214      | 0.371        | 0.000 (0.000)    | 0.270 (0.021)    | 0 (0.000) |     2.52 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME    |
|           10 |     3175 | 2025-03-08 | ODDIK           | L   | 0.207      | -            | -                | -                | -         |    -0.96 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME    |
|            9 |     3236 | 2025-03-07 | LaChampionsLiga | L   | 0.201      | -            | -                | -                | -         |    -4.18 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME    |
|            8 |     3829 | 2025-02-15 | MIBR Academy    | L   | 0.068      | -            | -                | -                | -         |    -1.13 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            7 |     3898 | 2025-02-13 | NITRO           | W   | 0.054      | 0.371        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.49 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            6 |     3939 | 2025-02-11 | Bounty Hunters  | L   | 0.041      | -            | -                | -                | -         |    -0.45 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            5 |     4008 | 2025-02-09 | GameHunters     | L   | 0.028      | -            | -                | -                | -         |    -0.24 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            4 |     4106 | 2025-02-07 | Imperial        | L   | 0.014      | -            | -                | -                | -         |    -0.05 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            3 |     4121 | 2025-02-06 | 2GAME           | W   | 0.009      | 0.143        | 0.023 (0.000)    | 0.547 (0.001)    | 0 (0.000) |     0.19 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            2 |     4146 | 2025-02-05 | Imperial        | L   | 0.002      | -            | -                | -                | -         |    -0.01 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            1 |     4160 | 2025-02-05 | KRÜ             | W   | 0.001      | 0.143        | 0.005 (0.000)    | 0.333 (0.000)    | 0 (0.000) |     0.01 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($344.51)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-11 |      0.230 | $1,500.00      | $344.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
