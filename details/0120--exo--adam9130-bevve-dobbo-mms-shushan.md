### Roster Details<br />
Team Name: EXO<br />
Roster: Adam9130, bevve, dobbo, MMS, shushan<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [120](../standings_global.md)<br />
Regional Rank: [80]( ../standings_europe.md)<br />
Final Rank Value:  808.3<br />
<br />
Final Rank Value (808.3) = Starting Rank Value (805.8) + Head To Head Adjustments (2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.371[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.161[<sup>2</sup>](#table1)

The average of these factors is 0.200<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 805.8
- 400 + ( ( 0.200 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 805.8


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
|           15 |        4 | 2024-06-17 | UNiTY           | L   | 1.000      | -            | -                | -                | -         |    -8.15 | Adam9130, bevve, dobbo, MMS, shushan       |
|           14 |        5 | 2024-06-17 | kONO            | L   | 1.000      | -            | -                | -                | -         |   -12.34 | Adam9130, bevve, dobbo, MMS, shushan       |
|           13 |      193 | 2024-06-10 | Fraud5          | W   | 1.000      | 0.282        | 0.007 (0.002)    | 0.094 (0.027)    | 0 (0.000) |    10.70 | Adam9130, bevve, dobbo, MMS, shushan       |
|           12 |      528 | 2024-06-04 | Verdant         | W   | 1.000      | 0.282        | 0.013 (0.004)    | 0.308 (0.087)    | 0 (0.000) |    17.21 | Adam9130, bevve, dobbo, MMS, shushan       |
|           11 |      612 | 2024-06-01 | CYBERSHOKE      | L   | 1.000      | -            | -                | -                | -         |   -15.27 | Adam9130, bevve, dobbo, MMS, shushan       |
|           10 |      671 | 2024-05-30 | The Last Resort | W   | 1.000      | 0.282        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.67 | Adam9130, bevve, dobbo, MMS, shushan       |
|            9 |     1550 | 2024-04-27 | GL Academy      | L   | 0.854      | -            | -                | -                | -         |   -14.26 | Adam9130, bevve, dobbo, MMS, shushan       |
|            8 |     2299 | 2024-03-29 | Fraud5          | W   | 0.664      | 0.282        | 0.007 (0.001)    | 0.094 (0.018)    | 1 (0.664) |     7.04 | Adam9130, bevve, dobbo, eraa, Thomas       |
|            7 |     2483 | 2024-03-19 | Verdant         | W   | 0.596      | 0.143        | 0.013 (0.001)    | 0.308 (0.026)    | 0 (0.000) |    10.42 | Adam9130, bevve, dobbo, eraa, RuStY        |
|            6 |     2587 | 2024-03-14 | RAPTORS EC      | W   | 0.563      | 0.143        | 0.001 (0.000)    | 0.051 (0.004)    | 0 (0.000) |     4.94 | BehinDx, Karrar, moz, Prime, wfn           |
|            5 |     3016 | 2024-02-25 | Fraud5          | W   | 0.442      | 0.307        | 0.007 (0.001)    | 0.094 (0.013)    | 1 (0.442) |     5.23 | Adam9130, bevve, dobbo, Extinct, smooya    |
|            4 |     3022 | 2024-02-25 | RAPTORS EC      | W   | 0.440      | 0.307        | 0.001 (0.000)    | 0.051 (0.007)    | 1 (0.440) |     4.09 | BehinDx, Karrar, moz, Prime, wfn           |
|            3 |     3044 | 2024-02-24 | Fraud5          | L   | 0.436      | -            | -                | -                | -         |    -8.70 | Rezst, shyyne, SLY, Tree60, yz0            |
|            2 |     3496 | 2024-02-02 | Sashi Academy   | W   | 0.289      | 0.284        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.59 | Adam9130, AwaykeN, bevve, dobbo, Duplicate |
|            1 |     3565 | 2024-01-30 | Insilio         | L   | 0.269      | -            | -                | -                | -         |    -2.66 | faydett, FpSSS, Pipw, Polt, sugaR          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,056.41)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-18 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-10 |      1.000 | $1,908.00      | $1,908.00       |
| 2024-03-29 |      0.664 | $1,902.00      | $1,262.19       |
| 2024-02-25 |      0.442 | $2,962.00      | $1,308.88       |
| 2024-02-02 |      0.289 | $2,000.00      | $577.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
