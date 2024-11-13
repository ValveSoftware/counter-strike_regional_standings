### Roster Details<br />
Team Name: HAVU<br />
Roster: Airax, Jelo, ottoNd, puuha, uli<br />
Global Rank: [210](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [125]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  520.3<br />
<br />
Final Rank Value (520.3) = Starting Rank Value (514.8) + Head To Head Adjustments (5.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.8
- 400 + ( ( 0.057 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 514.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     2705 | 2024-08-11 | Illuminar        | L   | 0.573      | -            | -                | -                | -         |    -1.13 | Airax, Jelo, ottoNd, puuha, uli |
|           15 |     2756 | 2024-08-09 | Monte Gen        | W   | 0.559      | 0.435        | 0.008 (0.002)    | 0.432 (0.105)    | 0 (0.000) |    14.93 | Airax, Jelo, ottoNd, puuha, uli |
|           14 |     2808 | 2024-08-07 | FLuffy Gangsters | L   | 0.547      | -            | -                | -                | -         |    -3.75 | Airax, Jelo, ottoNd, puuha, uli |
|           13 |     2873 | 2024-08-06 | Metizport        | L   | 0.539      | -            | -                | -                | -         |    -0.54 | Airax, Jelo, ottoNd, puuha, uli |
|           12 |     2883 | 2024-08-06 | UNPAID           | L   | 0.538      | -            | -                | -                | -         |    -0.26 | Airax, Jelo, ottoNd, puuha, uli |
|           11 |     2899 | 2024-08-05 | SovvyKiNG        | L   | 0.532      | -            | -                | -                | -         |    -3.60 | Airax, Jelo, ottoNd, puuha, uli |
|           10 |     2992 | 2024-08-02 | ENCE Academy     | L   | 0.513      | -            | -                | -                | -         |    -3.11 | Airax, Jelo, ottoNd, puuha, uli |
|            9 |     3166 | 2024-07-29 | Permitta         | L   | 0.485      | -            | -                | -                | -         |    -0.41 | Airax, Jelo, ottoNd, puuha, uli |
|            8 |     3286 | 2024-07-25 | ECLOT            | L   | 0.459      | -            | -                | -                | -         |    -0.28 | Airax, Jelo, ottoNd, puuha, uli |
|            7 |     3613 | 2024-07-17 | Rhyno            | L   | 0.405      | -            | -                | -                | -         |    -1.66 | Airax, Jelo, ottoNd, puuha, uli |
|            6 |     4164 | 2024-06-09 | Zero Tenacity    | L   | 0.152      | -            | -                | -                | -         |    -0.31 | Airax, Jelo, ottoNd, puuha, uli |
|            5 |     4265 | 2024-06-07 | GUN5             | L   | 0.140      | -            | -                | -                | -         |    -0.31 | Airax, Jelo, ottoNd, puuha, uli |
|            4 |     4354 | 2024-06-06 | Sampi            | L   | 0.132      | -            | -                | -                | -         |    -0.28 | Airax, Jelo, ottoNd, puuha, uli |
|            3 |     4474 | 2024-06-03 | RUBY             | W   | 0.113      | 0.435        | 0.015 (0.001)    | 0.247 (0.012)    | 0 (0.000) |     2.82 | Airax, Jelo, ottoNd, puuha, uli |
|            2 |     4485 | 2024-06-02 | UHKA             | W   | 0.107      | 0.143        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.15 | Airax, Jelo, ottoNd, puuha, uli |
|            1 |     4499 | 2024-06-02 | Heimo            | W   | 0.105      | 0.143        | 0.001 (0.000)    | 0.148 (0.002)    | 0 (0.000) |     2.27 | Airax, Jelo, ottoNd, puuha, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
