### Roster Details<br />
Team Name: TYLOO<br />
Roster: advent, JamYoung, kaze, Mercury, zdr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [126](../standings_global.md)<br />
Regional Rank: [8]( ../standings_asia.md)<br />
Final Rank Value:  789.2<br />
<br />
Final Rank Value (789.2) = Starting Rank Value (785.0) + Head To Head Adjustments (4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.386[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 785.0
- 400 + ( ( 0.190 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 785.0


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
|           23 |     2121 | 2024-04-27 | M80             | L   | 0.613      | -            | -                | -                | -         |    -1.03 | advent, JamYoung, kaze, Mercury, zdr    |
|           22 |     2144 | 2024-04-26 | Sharks          | W   | 0.607      | 0.889        | 0.025 (0.014)    | 0.040 (0.022)    | 1 (0.607) |     9.32 | advent, JamYoung, kaze, Mercury, zdr    |
|           21 |     2181 | 2024-04-25 | Falcons         | L   | 0.599      | -            | -                | -                | -         |    -0.48 | advent, JamYoung, kaze, Mercury, zdr    |
|           20 |     2203 | 2024-04-24 | G2              | L   | 0.592      | -            | -                | -                | -         |    -0.03 | advent, JamYoung, kaze, Mercury, zdr    |
|           19 |     2336 | 2024-04-19 | Rare Atom       | L   | 0.558      | -            | -                | -                | -         |   -11.91 | advent, JamYoung, kaze, Mercury, zdr    |
|           18 |     2376 | 2024-04-18 | The MongolZ     | L   | 0.552      | -            | -                | -                | -         |    -0.04 | advent, JamYoung, kaze, Mercury, zdr    |
|           17 |     2389 | 2024-04-18 | Lynn Vision     | W   | 0.551      | 0.143        | 0.103 (0.008)    | 0.187 (0.015)    | 0 (0.000) |    14.16 | advent, JamYoung, kaze, Mercury, zdr    |
|           16 |     2420 | 2024-04-17 | Sheer Conquer   | W   | 0.545      | 0.143        | 0.000 (0.000)    | 0.022 (0.002)    | 0 (0.000) |     2.97 | advent, JamYoung, kaze, Mercury, zdr    |
|           15 |     2426 | 2024-04-17 | The Huns        | W   | 0.544      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.86 | advent, JamYoung, kaze, Mercury, zdr    |
|           14 |     2674 | 2024-04-08 | Lynn Vision     | L   | 0.485      | -            | -                | -                | -         |    -2.72 | advent, JamYoung, kaze, Mercury, zdr    |
|           13 |     2684 | 2024-04-08 | MOUZ            | L   | 0.483      | -            | -                | -                | -         |    -0.03 | advent, JamYoung, kaze, Mercury, zdr    |
|           12 |     3218 | 2024-03-13 | LYG             | L   | 0.312      | -            | -                | -                | -         |    -5.86 | advent, JamYoung, lyrics3, Mercury, zdr |
|           11 |     3224 | 2024-03-13 | padaem Holodnie | W   | 0.311      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     1.02 | advent, JamYoung, lyrics3, Mercury, zdr |
|           10 |     3573 | 2024-02-27 | ATOX            | L   | 0.210      | -            | -                | -                | -         |    -2.33 | advent, aumaN, JamYoung, kaze, Mercury  |
|            9 |     3585 | 2024-02-26 | Lynn Vision     | L   | 0.204      | -            | -                | -                | -         |    -1.28 | advent, aumaN, JamYoung, kaze, Mercury  |
|            8 |     3587 | 2024-02-25 | JiJieHao        | W   | 0.203      | 0.143        | 0.000 (0.000)    | 0.009 (0.000)    | 1 (0.203) |     0.71 | advent, aumaN, JamYoung, kaze, Mercury  |
|            7 |     4091 | 2024-02-02 | Rare Atom       | L   | 0.045      | -            | -                | -                | -         |    -0.95 | advent, aumaN, JamYoung, kaze, Mercury  |
|            6 |     4121 | 2024-02-01 | Newhappy        | W   | 0.038      | 0.143        | 0.000 (0.000)    | 0.019 (0.000)    | 0 (0.000) |     0.21 | advent, aumaN, JamYoung, kaze, Mercury  |
|            5 |     4123 | 2024-02-01 | GR              | W   | 0.037      | 0.143        | 0.010 (0.000)    | 0.051 (0.000)    | 0 (0.000) |     0.42 | advent, aumaN, JamYoung, kaze, Mercury  |
|            4 |     4177 | 2024-01-27 | Lynn Vision     | L   | 0.010      | -            | -                | -                | -         |    -0.06 | advent, aumaN, JamYoung, kaze, Mercury  |
|            3 |     4186 | 2024-01-27 | The MongolZ     | W   | 0.006      | 0.143        | 1.000 (0.001)    | 0.725 (0.001)    | 0 (0.000) |     0.18 | advent, aumaN, JamYoung, kaze, Mercury  |
|            2 |     4190 | 2024-01-27 | The Huns        | W   | 0.005      | 0.143        | -                | 0.005 (0.000)    | -         |     0.01 | advent, aumaN, JamYoung, kaze, Mercury  |
|            1 |     4193 | 2024-01-26 | ACME            | W   | 0.003      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.003) |     0.02 | advent, aumaN, JamYoung, kaze, Mercury  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,137.42)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      0.713 | $7,000.00      | $4,991.14       |
| 2024-04-14 |      0.525 | $4,000.00      | $2,099.59       |
| 2024-01-28 |      0.012 | $4,000.00      | $46.69          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
