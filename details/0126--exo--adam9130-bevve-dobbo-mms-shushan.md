### Roster Details<br />
Team Name: EXO<br />
Roster: Adam9130, bevve, dobbo, MMS, shushan<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [126](../standings_global.md)<br />
Regional Rank: [83]( ../standings_europe.md)<br />
Final Rank Value:  801.8<br />
<br />
Final Rank Value (801.8) = Starting Rank Value (797.0) + Head To Head Adjustments (4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.368[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.125[<sup>2</sup>](#table1)

The average of these factors is 0.188<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 797.0
- 400 + ( ( 0.188 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 797.0


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
|           15 |      140 | 2024-06-17 | UNiTY           | L   | 1.000      | -            | -                | -                | -         |    -7.13 | Adam9130, bevve, dobbo, MMS, shushan       |
|           14 |      141 | 2024-06-17 | kONO            | L   | 1.000      | -            | -                | -                | -         |   -11.80 | Adam9130, bevve, dobbo, MMS, shushan       |
|           13 |      329 | 2024-06-10 | Fraud5          | W   | 0.994      | 0.282        | 0.007 (0.002)    | 0.082 (0.023)    | 0 (0.000) |    10.73 | Adam9130, bevve, dobbo, MMS, shushan       |
|           12 |      664 | 2024-06-04 | Verdant         | W   | 0.954      | 0.282        | 0.013 (0.003)    | 0.327 (0.088)    | 0 (0.000) |    17.23 | Adam9130, bevve, dobbo, MMS, shushan       |
|           11 |      746 | 2024-06-01 | CYBERSHOKE      | L   | 0.934      | -            | -                | -                | -         |   -12.85 | Adam9130, bevve, dobbo, MMS, shushan       |
|           10 |      805 | 2024-05-30 | The Last Resort | W   | 0.921      | 0.282        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.63 | Adam9130, bevve, dobbo, MMS, shushan       |
|            9 |     1684 | 2024-04-27 | GL Academy      | L   | 0.698      | -            | -                | -                | -         |   -11.45 | Adam9130, bevve, dobbo, MMS, shushan       |
|            8 |     2432 | 2024-03-29 | Fraud5          | W   | 0.508      | 0.282        | 0.007 (0.001)    | 0.082 (0.012)    | 1 (0.508) |     5.53 | Adam9130, bevve, dobbo, eraa, Thomas       |
|            7 |     2616 | 2024-03-19 | Verdant         | W   | 0.441      | 0.143        | 0.013 (0.001)    | 0.327 (0.021)    | 0 (0.000) |     8.14 | Adam9130, bevve, dobbo, eraa, RuStY        |
|            6 |     2720 | 2024-03-14 | RAPTORS EC      | W   | 0.408      | 0.143        | 0.001 (0.000)    | 0.048 (0.003)    | 0 (0.000) |     3.62 | Adam9130, bevve, dobbo, eraa, RuStY        |
|            5 |     3149 | 2024-02-25 | Fraud5          | W   | 0.286      | 0.307        | 0.007 (0.001)    | 0.082 (0.007)    | 1 (0.286) |     3.38 | Adam9130, bevve, dobbo, Extinct, smooya    |
|            4 |     3155 | 2024-02-25 | RAPTORS EC      | W   | 0.285      | 0.307        | 0.001 (0.000)    | 0.048 (0.004)    | 1 (0.285) |     2.62 | Adam9130, bevve, dobbo, Extinct, smooya    |
|            3 |     3177 | 2024-02-24 | Fraud5          | L   | 0.280      | -            | -                | -                | -         |    -5.59 | Adam9130, bevve, dobbo, Extinct, smooya    |
|            2 |     3629 | 2024-02-02 | Sashi Academy   | W   | 0.133      | 0.284        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.75 | Adam9130, AwaykeN, bevve, dobbo, Duplicate |
|            1 |     3698 | 2024-01-30 | Insilio         | L   | 0.113      | -            | -                | -                | -         |    -1.09 | Adam9130, AwaykeN, bevve, dobbo, Duplicate |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,976.64)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-18 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-10 |      0.994 | $1,908.00      | $1,896.77       |
| 2024-03-29 |      0.508 | $1,902.00      | $966.10         |
| 2024-02-25 |      0.286 | $2,962.00      | $847.78         |
| 2024-02-02 |      0.133 | $2,000.00      | $265.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
