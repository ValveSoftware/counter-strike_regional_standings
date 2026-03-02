### Roster Details<br />
Team Name: Betclic<br />
Roster: Demho, dycha, Melavi, Prism, wafe1ek<br />
Global Rank: [228](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [147]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  641.9<br />
<br />
Final Rank Value (641.9) = Starting Rank Value (647.4) + Head To Head Adjustments (-5.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.254[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.031[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 647.4
- 400 + ( ( 0.131 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 647.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     1910 | 2025-12-20 | SPARTA        | L   | 0.720      | -            | -                | -                | -         |    -3.21 | AdrieN, Demho, dycha, Melavi, Prism  |
|           19 |     2327 | 2025-11-28 | ARCRED        | L   | 0.574      | -            | -                | -                | -         |    -2.78 | AdrieN, Demho, dycha, Melavi, Prism  |
|           18 |     2345 | 2025-11-28 | Mousquetaires | L   | 0.571      | -            | -                | -                | -         |    -6.13 | AdrieN, Demho, dycha, Melavi, Prism  |
|           17 |     2559 | 2025-11-20 | JiJieHao      | L   | 0.519      | -            | -                | -                | -         |    -2.19 | Demho, dycha, Melavi, mixer, Prism   |
|           16 |     2643 | 2025-11-15 | SIXSEVEN      | L   | 0.487      | -            | -                | -                | -         |    -3.06 | Demho, dycha, Melavi, mixer, Prism   |
|           15 |     3798 | 2025-10-10 | Gentle Mates  | L   | 0.247      | -            | -                | -                | -         |    -0.08 | Demho, dycha, Melavi, Prism, wafe1ek |
|           14 |     3863 | 2025-10-09 | BET-M         | L   | 0.240      | -            | -                | -                | -         |    -0.68 | Demho, dycha, Melavi, Prism, wafe1ek |
|           13 |     3927 | 2025-10-08 | ARCRED        | W   | 0.232      | 0.487        | 0.011 (0.001)    | 0.942 (0.106)    | 0 (0.000) |     6.55 | Demho, dycha, Melavi, Prism, wafe1ek |
|           12 |     4073 | 2025-10-05 | VP.Prodigy    | W   | 0.214      | 0.487        | 0.002 (0.000)    | 0.441 (0.046)    | 0 (0.000) |     4.23 | Demho, dycha, Melavi, Prism, wafe1ek |
|           11 |     4122 | 2025-10-04 | Tricked       | L   | 0.207      | -            | -                | -                | -         |    -0.45 | Demho, dycha, Melavi, Prism, wafe1ek |
|           10 |     4257 | 2025-10-01 | Eternal Fire  | L   | 0.185      | -            | -                | -                | -         |    -2.28 | Demho, dycha, Melavi, Prism, wafe1ek |
|            9 |     4349 | 2025-09-28 | 1win          | L   | 0.167      | -            | -                | -                | -         |    -0.46 | AdrieN, Demho, dycha, Melavi, Prism  |
|            8 |     4416 | 2025-09-27 | SIXSEVEN      | L   | 0.160      | -            | -                | -                | -         |    -1.31 | AdrieN, Demho, dycha, Melavi, Prism  |
|            7 |     4436 | 2025-09-27 | 9INE          | L   | 0.158      | -            | -                | -                | -         |    -0.11 | AdrieN, Demho, dycha, Melavi, Prism  |
|            6 |     4451 | 2025-09-26 | Wildcard      | W   | 0.154      | 0.354        | 0.007 (0.000)    | 0.084 (0.005)    | 1 (0.154) |     2.90 | AdrieN, Demho, dycha, Melavi, Prism  |
|            5 |     4460 | 2025-09-26 | Tricked       | W   | 0.153      | 0.354        | 0.015 (0.001)    | 0.390 (0.021)    | 1 (0.153) |     4.51 | AdrieN, Demho, dycha, Melavi, Prism  |
|            4 |     4480 | 2025-09-26 | Nemesis       | L   | 0.152      | -            | -                | -                | -         |    -1.40 | AdrieN, Demho, dycha, Melavi, Prism  |
|            3 |     4611 | 2025-09-21 | Sashi         | L   | 0.119      | -            | -                | -                | -         |    -0.14 | AdrieN, Demho, dycha, Melavi, Prism  |
|            2 |     4675 | 2025-09-19 | Partizan      | L   | 0.105      | -            | -                | -                | -         |    -1.36 | Demho, dycha, Prism, wizzhehe, Xydoo |
|            1 |     4708 | 2025-09-18 | Eternal Fire  | W   | 0.099      | 0.371        | 0.002 (0.000)    | 0.274 (0.010)    | 0 (0.000) |     1.91 | Demho, dycha, Prism, wizzhehe, Xydoo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($388.68)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-12 |      0.259 | $1,500.00      | $388.68         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
