### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: bezymecc, brett, jason, sacrifice, slump<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [152](../standings_global.md)<br />
Regional Rank: [41]( ../standings_americas.md)<br />
Final Rank Value:  702.2<br />
<br />
Final Rank Value (702.2) = Starting Rank Value (715.2) + Head To Head Adjustments (-13.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 715.2
- 400 + ( ( 0.156 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 715.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |       20 | 2024-07-23 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -5.54 | bezymecc, brett, jason, sacrifice, slump |
|           21 |       22 | 2024-07-23 | Party Astronauts | W   | 1.000      | 0.477        | 0.053 (0.025)    | 0.591 (0.282)    | 0 (0.000) |    26.51 | bezymecc, brett, jason, sacrifice, slump |
|           20 |      308 | 2024-07-16 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -4.91 | bezymecc, brett, jason, sacrifice, slump |
|           19 |      313 | 2024-07-16 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -5.14 | bezymecc, brett, jason, sacrifice, slump |
|           18 |      656 | 2024-06-14 | Elevate          | L   | 0.936      | -            | -                | -                | -         |    -4.50 | brett, jason, nooz, PNDLM, sacrifice     |
|           17 |      890 | 2024-06-08 | Perseverance     | W   | 0.894      | 0.371        | 0.000 (0.000)    | 0.072 (0.024)    | 0 (0.000) |     7.98 | brett, jason, nooz, PNDLM, sacrifice     |
|           16 |      981 | 2024-06-06 | OMiT             | L   | 0.883      | -            | -                | -                | -         |   -10.26 | brett, jason, nooz, PNDLM, sacrifice     |
|           15 |      999 | 2024-06-06 | NRG              | L   | 0.881      | -            | -                | -                | -         |    -6.21 | brett, jason, nooz, PNDLM, sacrifice     |
|           14 |     1014 | 2024-06-06 | M80              | L   | 0.880      | -            | -                | -                | -         |    -0.98 | brett, jason, nooz, PNDLM, sacrifice     |
|           13 |     1065 | 2024-06-05 | NRG              | L   | 0.874      | -            | -                | -                | -         |    -6.56 | brett, jason, nooz, PNDLM, sacrifice     |
|           12 |     1152 | 2024-06-03 | Akimbo           | W   | 0.860      | 0.371        | 0.004 (0.001)    | 0.086 (0.027)    | 0 (0.000) |    12.14 | brett, jason, nooz, PNDLM, sacrifice     |
|           11 |     1461 | 2024-05-21 | Nouns            | L   | 0.776      | -            | -                | -                | -         |    -4.42 | brett, jason, nooz, PNDLM, sacrifice     |
|           10 |     1464 | 2024-05-21 | Nouns            | L   | 0.776      | -            | -                | -                | -         |    -4.60 | brett, jason, nooz, PNDLM, sacrifice     |
|            9 |     1501 | 2024-05-20 | Perseverance     | W   | 0.769      | 0.477        | 0.005 (0.002)    | 0.243 (0.089)    | 0 (0.000) |    14.28 | brett, jason, nooz, PNDLM, sacrifice     |
|            8 |     1506 | 2024-05-20 | Perseverance     | L   | 0.768      | -            | -                | -                | -         |    -9.97 | brett, jason, nooz, PNDLM, sacrifice     |
|            7 |     1541 | 2024-05-19 | Nouns            | L   | 0.761      | -            | -                | -                | -         |    -4.62 | brett, jason, nooz, PNDLM, sacrifice     |
|            6 |     1595 | 2024-05-17 | Elevate          | L   | 0.749      | -            | -                | -                | -         |    -3.62 | brett, jason, nooz, PNDLM, sacrifice     |
|            5 |     1596 | 2024-05-17 | Elevate          | L   | 0.749      | -            | -                | -                | -         |    -3.75 | brett, jason, nooz, PNDLM, sacrifice     |
|            4 |     1628 | 2024-05-16 | Party Astronauts | L   | 0.742      | -            | -                | -                | -         |    -5.17 | brett, jason, nooz, PNDLM, sacrifice     |
|            3 |     1631 | 2024-05-16 | Party Astronauts | L   | 0.742      | -            | -                | -                | -         |    -5.42 | brett, jason, nooz, PNDLM, sacrifice     |
|            2 |     1665 | 2024-05-15 | MIGHT            | W   | 0.736      | 0.477        | 0.000 (0.000)    | 0.073 (0.026)    | 0 (0.000) |     5.75 | brett, jason, nooz, PNDLM, sacrifice     |
|            1 |     1671 | 2024-05-15 | MIGHT            | W   | 0.735      | 0.477        | 0.000 (0.000)    | 0.073 (0.026)    | 0 (0.000) |     6.04 | brett, jason, nooz, PNDLM, sacrifice     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,082.75)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
