### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: bezymecc, brett, jason, sacrifice, slump<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [167](../standings_global.md)<br />
Regional Rank: [47]( ../standings_americas.md)<br />
Final Rank Value:  680.9<br />
<br />
Final Rank Value (680.9) = Starting Rank Value (695.5) + Head To Head Adjustments (-14.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 695.5
- 400 + ( ( 0.138 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 695.5


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
|           20 |       20 | 2024-07-16 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -4.12 | bezymecc, brett, jason, sacrifice, slump |
|           19 |       25 | 2024-07-16 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -4.29 | bezymecc, brett, jason, sacrifice, slump |
|           18 |      368 | 2024-06-14 | Elevate          | L   | 0.983      | -            | -                | -                | -         |    -3.90 | brett, jason, nooz, PNDLM, sacrifice     |
|           17 |      602 | 2024-06-08 | Perseverance     | W   | 0.941      | 0.371        | 0.000 (0.000)    | 0.077 (0.027)    | 0 (0.000) |     8.89 | brett, jason, nooz, PNDLM, sacrifice     |
|           16 |      693 | 2024-06-06 | OMiT             | L   | 0.930      | -            | -                | -                | -         |    -9.28 | brett, jason, nooz, PNDLM, sacrifice     |
|           15 |      711 | 2024-06-06 | NRG              | L   | 0.928      | -            | -                | -                | -         |    -5.46 | brett, jason, nooz, PNDLM, sacrifice     |
|           14 |      726 | 2024-06-06 | M80              | L   | 0.927      | -            | -                | -                | -         |    -1.01 | brett, jason, nooz, PNDLM, sacrifice     |
|           13 |      777 | 2024-06-05 | NRG              | L   | 0.921      | -            | -                | -                | -         |    -5.76 | brett, jason, nooz, PNDLM, sacrifice     |
|           12 |      864 | 2024-06-03 | Akimbo           | W   | 0.908      | 0.371        | 0.005 (0.002)    | 0.093 (0.031)    | 0 (0.000) |    14.12 | brett, jason, nooz, PNDLM, sacrifice     |
|           11 |     1173 | 2024-05-21 | Nouns            | L   | 0.823      | -            | -                | -                | -         |    -3.70 | brett, jason, nooz, PNDLM, sacrifice     |
|           10 |     1176 | 2024-05-21 | Nouns            | L   | 0.823      | -            | -                | -                | -         |    -3.84 | brett, jason, nooz, PNDLM, sacrifice     |
|            9 |     1213 | 2024-05-20 | Perseverance     | W   | 0.816      | 0.477        | 0.006 (0.002)    | 0.268 (0.104)    | 0 (0.000) |    16.59 | brett, jason, nooz, PNDLM, sacrifice     |
|            8 |     1218 | 2024-05-20 | Perseverance     | L   | 0.816      | -            | -                | -                | -         |    -9.02 | brett, jason, nooz, PNDLM, sacrifice     |
|            7 |     1253 | 2024-05-19 | Nouns            | L   | 0.808      | -            | -                | -                | -         |    -3.77 | brett, jason, nooz, PNDLM, sacrifice     |
|            6 |     1307 | 2024-05-17 | Elevate          | L   | 0.796      | -            | -                | -                | -         |    -2.99 | brett, jason, nooz, PNDLM, sacrifice     |
|            5 |     1308 | 2024-05-17 | Elevate          | L   | 0.796      | -            | -                | -                | -         |    -3.08 | brett, jason, nooz, PNDLM, sacrifice     |
|            4 |     1340 | 2024-05-16 | Party Astronauts | L   | 0.789      | -            | -                | -                | -         |    -4.25 | brett, jason, nooz, PNDLM, sacrifice     |
|            3 |     1343 | 2024-05-16 | Party Astronauts | L   | 0.789      | -            | -                | -                | -         |    -4.42 | brett, jason, nooz, PNDLM, sacrifice     |
|            2 |     1377 | 2024-05-15 | MIGHT            | W   | 0.783      | 0.477        | 0.000 (0.000)    | 0.082 (0.031)    | 0 (0.000) |     7.11 | brett, jason, nooz, PNDLM, sacrifice     |
|            1 |     1383 | 2024-05-15 | MIGHT            | W   | 0.783      | 0.477        | 0.000 (0.000)    | 0.082 (0.031)    | 0 (0.000) |     7.53 | brett, jason, nooz, PNDLM, sacrifice     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,139.42)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
