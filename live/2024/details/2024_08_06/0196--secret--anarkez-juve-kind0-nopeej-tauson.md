### Roster Details<br />
Team Name: Secret<br />
Roster: anarkez, Juve, Kind0, NOPEEJ, Tauson<br />
Global Rank: [196](../../standings_global_2024_08_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_06.md)<br />
Regional Rank: [125]( ../../standings_europe_2024_08_06.md)<br />
<br />
Final Rank Value:  534.6<br />
<br />
Final Rank Value (534.6) = Starting Rank Value (538.7) + Head To Head Adjustments (-4.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 538.7
- 400 + ( ( 0.067 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 538.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     2215 | 2024-05-14 | WOPA          | L   | 0.639      | -            | -                | -                | -         |    -7.81 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           19 |     2225 | 2024-05-13 | LEON          | L   | 0.634      | -            | -                | -                | -         |    -6.17 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           18 |     2760 | 2024-04-19 | Portugal      | L   | 0.474      | -            | -                | -                | -         |    -4.80 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           17 |     2819 | 2024-04-18 | Nemiga        | L   | 0.466      | -            | -                | -                | -         |    -0.47 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           16 |     2834 | 2024-04-18 | 500           | W   | 0.465      | 0.143        | 0.001 (0.000)    | 0.090 (0.006)    | 0 (0.000) |    10.93 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           15 |     2857 | 2024-04-17 | Illuminar     | L   | 0.461      | -            | -                | -                | -         |    -7.87 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           14 |     2906 | 2024-04-16 | Sampi         | L   | 0.451      | -            | -                | -                | -         |    -1.69 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           13 |     2922 | 2024-04-15 | PGE Turow     | W   | 0.445      | 0.371        | 0.001 (0.000)    | 0.018 (0.003)    | 0 (0.000) |     9.06 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           12 |     2994 | 2024-04-11 | ENCE Academy  | L   | 0.419      | -            | -                | -                | -         |    -3.66 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           11 |     3181 | 2024-04-05 | 9 Pandas      | W   | 0.379      | 0.384        | 0.081 (0.012)    | 0.700 (0.102)    | 0 (0.000) |    11.17 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           10 |     3699 | 2024-03-12 | Endpoint      | L   | 0.219      | -            | -                | -                | -         |    -0.84 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|            9 |     3785 | 2024-03-08 | Metizport     | L   | 0.192      | -            | -                | -                | -         |    -0.66 | anarkez, innocent, Kind0, Maze, Tauson |
|            8 |     3814 | 2024-03-07 | ex-Preasy     | L   | 0.185      | -            | -                | -                | -         |    -1.15 | anarkez, innocent, Kind0, Maze, Tauson |
|            7 |     3895 | 2024-03-04 | Fraud5        | L   | 0.166      | -            | -                | -                | -         |    -1.86 | anarkez, innocent, Kind0, Maze, Tauson |
|            6 |     3931 | 2024-03-03 | Zero Tenacity | L   | 0.158      | -            | -                | -                | -         |    -0.20 | anarkez, innocent, Kind0, Maze, Tauson |
|            5 |     3951 | 2024-03-02 | Zero Tenacity | L   | 0.151      | -            | -                | -                | -         |    -0.20 | anarkez, innocent, Kind0, Maze, Tauson |
|            4 |     3993 | 2024-02-28 | Permitta      | W   | 0.132      | 0.143        | 0.039 (0.001)    | 0.919 (0.017)    | 0 (0.000) |     3.85 | anarkez, innocent, Kind0, Maze, Tauson |
|            3 |     4052 | 2024-02-25 | Entropiq      | L   | 0.112      | -            | -                | -                | -         |    -1.73 | anarkez, innocent, Kind0, Maze, Tauson |
|            2 |     4248 | 2024-02-17 | Sampi         | L   | 0.059      | -            | -                | -                | -         |    -0.23 | anarkez, innocent, Kind0, Maze, Tauson |
|            1 |     4401 | 2024-02-10 | 500           | W   | 0.012      | 0.358        | 0.001 (0.000)    | 0.090 (0.000)    | 0 (0.000) |     0.27 | anarkez, innocent, Kind0, Maze, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
