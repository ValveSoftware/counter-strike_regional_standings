### Roster Details<br />
Team Name: EXO<br />
Roster: Adam9130, bevve, dobbo, MMS, shushan<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [132](../standings_global.md)<br />
Regional Rank: [89]( ../standings_europe.md)<br />
Final Rank Value:  799.3<br />
<br />
Final Rank Value (799.3) = Starting Rank Value (794.4) + Head To Head Adjustments (4.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.367[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.111[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 794.4
- 400 + ( ( 0.184 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 794.4


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
|           15 |      304 | 2024-06-17 | UNiTY           | L   | 0.999      | -            | -                | -                | -         |    -6.82 | Adam9130, bevve, dobbo, MMS, shushan       |
|           14 |      305 | 2024-06-17 | kONO            | L   | 0.998      | -            | -                | -                | -         |   -11.79 | Adam9130, bevve, dobbo, MMS, shushan       |
|           13 |      493 | 2024-06-10 | Fraud5          | W   | 0.955      | 0.282        | 0.007 (0.002)    | 0.077 (0.021)    | 0 (0.000) |    10.43 | Adam9130, bevve, dobbo, MMS, shushan       |
|           12 |      828 | 2024-06-04 | Verdant         | W   | 0.915      | 0.282        | 0.013 (0.003)    | 0.316 (0.082)    | 0 (0.000) |    16.79 | Adam9130, bevve, dobbo, MMS, shushan       |
|           11 |      910 | 2024-06-01 | CYBERSHOKE      | L   | 0.894      | -            | -                | -                | -         |   -11.92 | Adam9130, bevve, dobbo, MMS, shushan       |
|           10 |      969 | 2024-05-30 | The Last Resort | W   | 0.881      | 0.282        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.56 | Adam9130, bevve, dobbo, MMS, shushan       |
|            9 |     1848 | 2024-04-27 | GL Academy      | L   | 0.658      | -            | -                | -                | -         |   -10.63 | Adam9130, bevve, dobbo, MMS, shushan       |
|            8 |     2596 | 2024-03-29 | Fraud5          | W   | 0.468      | 0.282        | 0.007 (0.001)    | 0.077 (0.010)    | 1 (0.468) |     5.17 | Adam9130, bevve, dobbo, eraa, Thomas       |
|            7 |     2780 | 2024-03-19 | Verdant         | W   | 0.401      | 0.143        | 0.013 (0.001)    | 0.316 (0.018)    | 0 (0.000) |     7.54 | Adam9130, bevve, dobbo, eraa, RuStY        |
|            6 |     2884 | 2024-03-14 | RAPTORS EC      | W   | 0.368      | 0.143        | 0.001 (0.000)    | 0.046 (0.002)    | 0 (0.000) |     3.29 | Adam9130, bevve, dobbo, eraa, RuStY        |
|            5 |     3313 | 2024-02-25 | Fraud5          | W   | 0.247      | 0.307        | 0.007 (0.001)    | 0.077 (0.006)    | 1 (0.247) |     2.93 | Adam9130, bevve, dobbo, Extinct, smooya    |
|            4 |     3319 | 2024-02-25 | RAPTORS EC      | W   | 0.245      | 0.307        | 0.001 (0.000)    | 0.046 (0.003)    | 1 (0.245) |     2.26 | Adam9130, bevve, dobbo, Extinct, smooya    |
|            3 |     3341 | 2024-02-24 | Fraud5          | L   | 0.241      | -            | -                | -                | -         |    -4.78 | Adam9130, bevve, dobbo, Extinct, smooya    |
|            2 |     3793 | 2024-02-02 | Sashi Academy   | W   | 0.093      | 0.284        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.53 | Adam9130, AwaykeN, bevve, dobbo, Duplicate |
|            1 |     3862 | 2024-01-30 | Insilio         | L   | 0.074      | -            | -                | -                | -         |    -0.68 | Adam9130, AwaykeN, bevve, dobbo, Duplicate |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,629.18)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-18 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-10 |      0.955 | $1,908.00      | $1,821.19       |
| 2024-03-29 |      0.468 | $1,902.00      | $890.76         |
| 2024-02-25 |      0.247 | $2,962.00      | $730.45         |
| 2024-02-02 |      0.093 | $2,000.00      | $186.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
