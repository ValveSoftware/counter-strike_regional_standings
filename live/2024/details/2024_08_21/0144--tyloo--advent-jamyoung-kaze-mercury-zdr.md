### Roster Details<br />
Team Name: TYLOO<br />
Roster: advent, JamYoung, kaze, Mercury, zdr<br />
Global Rank: [144](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_08_21.md)<br />
Regional Rank: [11]( ../../standings_asia_2024_08_21.md)<br />
<br />
Final Rank Value:  739.6<br />
<br />
Final Rank Value (739.6) = Starting Rank Value (728.3) + Head To Head Adjustments (11.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.050[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 728.3
- 400 + ( ( 0.165 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 728.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     3071 | 2024-04-27 | M80             | L   | 0.426      | -            | -                | -                | -         |    -1.05 | advent, JamYoung, kaze, Mercury, zdr    |
|           15 |     3094 | 2024-04-26 | Sharks          | W   | 0.420      | 0.889        | 0.018 (0.007)    | 0.022 (0.008)    | 1 (0.420) |     6.91 | advent, JamYoung, kaze, Mercury, zdr    |
|           14 |     3131 | 2024-04-25 | Falcons         | L   | 0.412      | -            | -                | -                | -         |    -0.17 | advent, JamYoung, kaze, Mercury, zdr    |
|           13 |     3153 | 2024-04-24 | G2              | L   | 0.405      | -            | -                | -                | -         |    -0.01 | advent, JamYoung, kaze, Mercury, zdr    |
|           12 |     3286 | 2024-04-19 | Rare Atom       | L   | 0.371      | -            | -                | -                | -         |    -3.65 | advent, JamYoung, kaze, Mercury, zdr    |
|           11 |     3326 | 2024-04-18 | The MongolZ     | L   | 0.365      | -            | -                | -                | -         |    -0.02 | advent, JamYoung, kaze, Mercury, zdr    |
|           10 |     3339 | 2024-04-18 | Lynn Vision     | W   | 0.364      | 0.143        | 0.076 (0.004)    | 0.138 (0.007)    | 0 (0.000) |     9.17 | advent, JamYoung, kaze, Mercury, zdr    |
|            9 |     3370 | 2024-04-17 | Sheer Conquer   | W   | 0.358      | 0.143        | 0.000 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     2.35 | advent, JamYoung, kaze, Mercury, zdr    |
|            8 |     3376 | 2024-04-17 | The Huns        | W   | 0.357      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.56 | advent, JamYoung, kaze, Mercury, zdr    |
|            7 |     3624 | 2024-04-08 | Lynn Vision     | L   | 0.298      | -            | -                | -                | -         |    -1.85 | advent, JamYoung, kaze, Mercury, zdr    |
|            6 |     3634 | 2024-04-08 | MOUZ            | L   | 0.296      | -            | -                | -                | -         |    -0.02 | advent, JamYoung, kaze, Mercury, zdr    |
|            5 |     4168 | 2024-03-13 | LYG             | L   | 0.125      | -            | -                | -                | -         |    -2.19 | advent, JamYoung, lyrics3, Mercury, zdr |
|            4 |     4174 | 2024-03-13 | padaem Holodnie | W   | 0.124      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.54 | advent, JamYoung, lyrics3, Mercury, zdr |
|            3 |     4523 | 2024-02-27 | ATOX            | L   | 0.023      | -            | -                | -                | -         |    -0.28 | advent, aumaN, JamYoung, kaze, Mercury  |
|            2 |     4535 | 2024-02-26 | Lynn Vision     | L   | 0.016      | -            | -                | -                | -         |    -0.10 | advent, aumaN, JamYoung, kaze, Mercury  |
|            1 |     4537 | 2024-02-25 | JiJieHao        | W   | 0.016      | 0.143        | 0.000 (0.000)    | 0.028 (0.000)    | 1 (0.016) |     0.07 | advent, aumaN, JamYoung, kaze, Mercury  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,030.76)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      0.526 | $7,000.00      | $3,680.25       |
| 2024-04-14 |      0.338 | $4,000.00      | $1,350.51       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
