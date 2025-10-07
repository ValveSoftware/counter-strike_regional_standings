### Roster Details<br />
Team Name: FURIA fe<br />
Roster: bizinha, gabs, izaa, kaahSENSEI, lulitenz<br />
Global Rank: [128](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_06.md)<br />
Regional Rank: [33]( ../../standings_americas_2025_10_06.md)<br />
<br />
Final Rank Value:  763.1<br />
<br />
Final Rank Value (763.1) = Starting Rank Value (814.5) + Head To Head Adjustments (-51.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.451[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.122[<sup>2</sup>](#table1)

The average of these factors is 0.212<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 814.5
- 400 + ( ( 0.212 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 814.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      644 | 2025-09-13 | Galorys            | L   | 1.000      | -            | -                | -                | -         |    -8.99 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|           12 |     1353 | 2025-08-16 | ShindeN            | L   | 0.862      | -            | -                | -                | -         |    -7.02 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|           11 |     1773 | 2025-08-02 | Yawara             | L   | 0.768      | -            | -                | -                | -         |   -11.86 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|           10 |     2183 | 2025-07-12 | 9z                 | L   | 0.627      | -            | -                | -                | -         |    -4.35 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            9 |     2266 | 2025-07-09 | Dashskins          | L   | 0.607      | -            | -                | -                | -         |   -10.75 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            8 |     2276 | 2025-07-09 | Players            | L   | 0.607      | -            | -                | -                | -         |   -15.41 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            7 |     2339 | 2025-07-01 | Keyd Stars         | L   | 0.555      | -            | -                | -                | -         |    -4.33 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            6 |     2390 | 2025-06-23 | Keyd Stars         | L   | 0.502      | -            | -                | -                | -         |    -3.87 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            5 |     2841 | 2025-05-25 | Shimmer            | W   | 0.307      | 0.624        | 0.036 (0.007)    | 0.139 (0.027)    | 1 (0.307) |     4.82 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            4 |     2852 | 2025-05-24 | Imperial Valkyries | W   | 0.301      | 0.624        | 0.021 (0.004)    | 0.013 (0.002)    | 1 (0.301) |     3.47 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            3 |     2883 | 2025-05-22 | Shimmer            | W   | 0.288      | 0.624        | 0.036 (0.007)    | 0.139 (0.025)    | 1 (0.288) |     4.60 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            2 |     2889 | 2025-05-22 | DMS                | W   | 0.287      | 0.624        | 0.006 (0.001)    | 0.001 (0.000)    | 1 (0.287) |     2.24 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            1 |     3830 | 2025-04-11 | MIBR fe            | W   | 0.015      | 0.525        | 0.006 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.09 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,048.13)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-25 |      0.307 | $75,000.00     | $23,048.13      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
