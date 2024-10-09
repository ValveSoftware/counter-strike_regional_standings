### Roster Details<br />
Team Name: TYLOO<br />
Roster: JamYoung, Jee, Mercury, Moseyuh, Starry<br />
Global Rank: [79](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_09.md)<br />
Regional Rank: [3]( ../../standings_asia_2024_10_09.md)<br />
<br />
Final Rank Value:  907.4<br />
<br />
Final Rank Value (907.4) = Starting Rank Value (872.1) + Head To Head Adjustments (35.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.419[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.240[<sup>2</sup>](#table1)

The average of these factors is 0.244<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 872.1
- 400 + ( ( 0.244 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 872.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1314 | 2024-08-29 | Rare Atom         | L   | 0.926      | -            | -                | -                | -         |   -16.40 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           18 |     1385 | 2024-08-28 | Rare Atom         | W   | 0.918      | 0.143        | 0.022 (0.003)    | 0.296 (0.039)    | 0 (0.000) |    12.49 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           17 |     1439 | 2024-08-27 | Teamwork          | W   | 0.911      | 0.143        | 0.000 (0.000)    | 0.121 (0.016)    | 0 (0.000) |     1.90 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           16 |     1446 | 2024-08-27 | Steel Helmet      | W   | 0.911      | -            | -                | -                | 0 (0.000) |     1.49 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           15 |     2157 | 2024-08-06 | Chinggis Warriors | W   | 0.773      | 0.380        | 0.010 (0.003)    | 0.154 (0.045)    | 1 (0.773) |    10.63 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           14 |     2181 | 2024-08-05 | Rare Atom         | W   | 0.766      | 0.380        | 0.022 (0.006)    | 0.296 (0.086)    | 1 (0.766) |    11.52 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           13 |     2217 | 2024-08-04 | Gaimin Gladiators | W   | 0.759      | 0.380        | 0.020 (0.006)    | 0.500 (0.144)    | 1 (0.759) |    12.12 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           12 |     2286 | 2024-08-02 | Rare Atom         | L   | 0.746      | -            | -                | -                | -         |   -12.15 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|           11 |     2328 | 2024-08-01 | Rare Atom         | W   | 0.739      | 0.143        | 0.022 (0.002)    | 0.296 (0.031)    | 0 (0.000) |    10.95 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|           10 |     2335 | 2024-08-01 | CatEvil           | W   | 0.739      | 0.143        | -                | 0.165 (0.017)    | 0 (0.000) |     4.12 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            9 |     3027 | 2024-07-13 | Rare Atom         | L   | 0.613      | -            | -                | -                | -         |   -11.02 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            8 |     3029 | 2024-07-13 | CatEvil           | W   | 0.613      | 0.143        | -                | 0.165 (0.014)    | 0 (0.000) |     2.94 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            7 |     3041 | 2024-07-12 | Chinggis Warriors | W   | 0.605      | 0.143        | 0.010 (0.001)    | -                | 0 (0.000) |     9.43 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            6 |     3044 | 2024-07-12 | Alter Ego         | W   | 0.605      | 0.143        | -                | 0.223 (0.019)    | -         |     2.36 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            5 |     3511 | 2024-06-08 | Lynn Vision       | L   | 0.380      | -            | -                | -                | -         |    -5.99 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |
|            4 |     3565 | 2024-06-07 | GR                | W   | 0.373      | 0.416        | 0.004 (0.001)    | 0.128 (0.020)    | -         |     2.89 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |
|            3 |     3634 | 2024-06-06 | The QUBE          | W   | 0.366      | 0.416        | 0.003 (0.000)    | -                | -         |     2.43 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |
|            2 |     3687 | 2024-06-05 | Lynn Vision       | L   | 0.360      | -            | -                | -                | -         |    -5.71 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |
|            1 |     3733 | 2024-06-04 | LYG               | W   | 0.353      | 0.416        | 0.002 (0.000)    | -                | -         |     1.40 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,560.02)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-06 |      0.773 | $13,755.00     | $10,628.30      |
| 2024-06-09 |      0.386 | $5,000.00      | $1,931.73       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
