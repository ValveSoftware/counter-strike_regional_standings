### Roster Details<br />
Team Name: adalYamigos<br />
Roster: bsd, ckzao, delboNi, f4stzin, SHOOWTiME<br />
Global Rank: [147](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [31]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  645.1<br />
<br />
Final Rank Value (645.1) = Starting Rank Value (669.0) + Head To Head Adjustments (-23.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 669.0
- 400 + ( ( 0.148 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 669.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     1138 | 2025-03-11 | ShindeN        | L   | 0.835      | -            | -                | -                | -         |   -10.49 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME    |
|           12 |     1175 | 2025-03-10 | Sharks         | W   | 0.827      | 0.371        | 0.051 (0.016)    | 0.811 (0.249)    | 0 (0.000) |    21.96 | ckzao, delboNi, f4stzin, fREQ, SHOOWTiME   |
|           11 |     1214 | 2025-03-09 | Elevate        | W   | 0.821      | 0.371        | 0.000 (0.000)    | 0.253 (0.077)    | 0 (0.000) |    11.22 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME    |
|           10 |     1296 | 2025-03-08 | ODDIK          | L   | 0.814      | -            | -                | -                | -         |    -8.54 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME    |
|            9 |     1353 | 2025-03-07 | Prasso         | L   | 0.808      | -            | -                | -                | -         |   -15.85 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME    |
|            8 |     1861 | 2025-02-15 | MIBR Academy   | L   | 0.675      | -            | -                | -                | -         |   -12.70 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            7 |     1930 | 2025-02-13 | NITRO          | W   | 0.660      | 0.371        | 0.000 (0.000)    | 0.115 (0.028)    | 0 (0.000) |     8.40 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            6 |     1971 | 2025-02-11 | Bounty Hunters | L   | 0.648      | -            | -                | -                | -         |   -13.75 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            5 |     2040 | 2025-02-09 | GameHunters    | L   | 0.634      | -            | -                | -                | -         |   -11.13 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            4 |     2138 | 2025-02-07 | Imperial       | L   | 0.621      | -            | -                | -                | -         |    -2.44 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            3 |     2153 | 2025-02-06 | 2GAME          | W   | 0.615      | 0.143        | 0.000 (0.000)    | 0.353 (0.031)    | 0 (0.000) |     6.14 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            2 |     2178 | 2025-02-05 | Imperial       | L   | 0.609      | -            | -                | -                | -         |    -2.37 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            1 |     2192 | 2025-02-05 | KRÜ            | W   | 0.607      | 0.143        | 0.000 (0.000)    | 0.301 (0.026)    | 0 (0.000) |     5.71 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,254.52)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-11 |      0.836 | $1,500.00      | $1,254.52       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
